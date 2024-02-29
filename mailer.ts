import axios from 'axios';
const fs = require('fs');
const path = require('path');
import * as testConfig from "baseConfig.json"
const mailer = require("nodemailer");
// URL of the Teams Webhook
const WEBHOOK_URL = testConfig.TeamsWebhookURL
const SLACK_WEBHOOK_URL = testConfig.SlackWebhookURL

function getCurrentFormattedTime(): string {
        const now = new Date();
        return now.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour12: true
        });
}
const executionTime = getCurrentFormattedTime();

async function sendReportToSlack() {
        const reportPath = path.join(__dirname, '/result.json'); // Update with the correct path
        const reportContent = fs.readFileSync(reportPath, 'utf8');
        const defaultobject = JSON.parse(reportContent);
        const passedcount = Number(defaultobject.Passedcount)
        const failedcount = Number(defaultobject.Failedcount)
        const Totalcount = Number(defaultobject.Passedcount) + Number(defaultobject.Failedcount)
        const Passpercentage = (passedcount / Totalcount * 100).toFixed(2)
        const Failpercentage = (failedcount / Totalcount * 100).toFixed(2)

        const Textmessage = "Hi Team," +
                "\n Test Execution for the project " + testConfig.Project + " is Conducted in " + testConfig.Env + " Environment and its succesfully completed." +
                "\n" +
                "> 🟠 Total Number of Test Cases Executed : " + Totalcount + "\n" +
                "> ✅ Total Number of test cases Passed : " + passedcount + "\n" +
                "> ❌ Total Number of test cases Failed : " + failedcount + "\n" +
                "> 🟢 Test cases Pass Percentage : " + Passpercentage + "\n" +
                "> ⛔ Test cases Fail Percentage : " + Failpercentage + "\n"
        const message = {
                text: "Playwright Test Execution Report",
                attachments: [
                        {
                                color: "#36a64f",
                                title: testConfig.Project,
                                text: Textmessage, // You can also send a summary or a link to the report
                                // icon_emoji: ":monkey_face:"
                        },
                        {
                                "blocks": [
                                        {
                                                "type": "section",
                                                "fields": [
                                                        {
                                                                "type": "mrkdwn",
                                                                "text": "*Environment:*\n" + testConfig.Env
                                                        },
                                                        {
                                                                "type": "mrkdwn",
                                                                "text": `*Execution Time:*\n${executionTime}`
                                                        }
                                                ]
                                        },
                                        {
                                                "type": "actions",
                                                "elements": [
                                                        {
                                                                "type": "button",
                                                                "text": {
                                                                        "type": "plain_text",
                                                                        "text": "View Full Report",
                                                                        "emoji": true
                                                                },
                                                                "value": "view_report",
                                                                "url": testConfig.GithubReportlink,
                                                                "style": "primary"
                                                        }
                                                ]
                                        }

                                ]
                        }
                ],


        };

        try {
                await axios.post(SLACK_WEBHOOK_URL, message);
                console.log('Report sent to Slack');
        } catch (error) {
                console.error('Error sending report to Slack:', error);
        }
}


export async function sendReportToTeams() {
        // Read your test report file
        const reportPath = path.join(__dirname, '/result.json'); // Update with the correct path
        const reportContent = fs.readFileSync(reportPath, 'utf8');
        const defaultobject = JSON.parse(reportContent);
        const passedcount = Number(defaultobject.Passedcount)
        const failedcount = Number(defaultobject.Failedcount)
        const Totalcount = Number(defaultobject.Passedcount) + Number(defaultobject.Failedcount)
        const Passpercentage = (passedcount / Totalcount * 100).toFixed(2)
        const Failpercentage = (failedcount / Totalcount * 100).toFixed(2)

        const Textmessage = "Hi Team," +
                "\n Test Execution for the project " + testConfig.Project + " is Conducted in " + testConfig.Env + " Environment and its succesfully completed." +
                "\n" +
                "> ## 🟠 Total Number of Test Cases Executed : " + Totalcount + "\n" +
                "> ## ✅ Total Number of test cases Passed : " + passedcount + "\n" +
                "> ## ❌ Total Number of test cases Failed : " + failedcount + "\n" +
                "> ## 🟢 Test cases Pass Percentage : " + Passpercentage + "\n" +
                "> ## ⛔ Test cases Fail Percentage : " + Failpercentage + "\n"
        // return Textmessage;

        // Construct the message
        const message = {
                "@type": "MessageCard",
                "@context": "http://schema.org/extensions",
                "summary": "Test Report",
                "sections": [{
                        "activityTitle": testConfig.Project,
                        "text": Textmessage,
                        // Add any relevant details here
                },
                {
                        "activityTitle": "Execution Time:",
                        "activitySubtitle": `${executionTime}`,
                        "activityImage": "URL of an image, if needed",
                        // "markdown": true
                },
                {
                        "activityTitle": "Environment:",
                        "text": testConfig.Env
                },
                ],
                "potentialAction": [
                        {
                                "@type": "OpenUri",
                                "name": "View Report",
                                // Assuming the report is hosted/served at a URL
                                "targets": [
                                        { "os": "default", "uri": testConfig.GithubReportlink }
                                ],
                        },
                ],

        };
        // Send the message to Teams
        try {
                const response = await axios.post(WEBHOOK_URL, message);
                console.log('Message sent to Teams:', response.data);
        } catch (error) {
                console.error('Error sending message to Teams:', error);
        }
}

// const smtpProtocol = mailer.createTransport({
//         service: testConfig.MailServiceProvider,
//         auth: {
//                 user: testConfig.FromMailaddress,
//                 pass: testConfig.FromAddressPassword,
//         },
// });
// var mailoption = {
//         from: "sabbir.udgo@gmail.com",
//         to: "sabbir.of@gmail.com",
//         subject: "Demo Project",
//         html: "Demo Data",
// };

// async function mailsender() {
//         return new Promise((resolve, reject) =>
//                 smtpProtocol.sendMail(mailoption, function (err: any, response: { message: string; }) {
//                         if (err) {
//                                 console.log(err);
//                                 reject("Promise Rejected");
//                         }
//                         console.log("Message Sent" + response.message);
//                         smtpProtocol.close();
//                         resolve("Promise Resolved");
//                 })
//         );
// }

async function mailSend() {
        await new Promise(resolve => setTimeout(resolve, 10000));
        //   if(testConfig.MailNotification.toLocaleLowerCase()=="yes"){
        // await mailsender()
        // if (testConfig.TeamsNotification.toLocaleLowerCase() == "yes") {
        // await sendReportToTeams()
        await sendReportToSlack()
        // }
}

export default mailSend;
