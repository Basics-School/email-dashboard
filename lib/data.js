import { faker } from "@faker-js/faker";
import { min } from "date-fns";

const data = {
  users: [
    {
      user_id: 1,
      username: "john_doe",
      password: "P@ssw0rd123",
      email: "john.doe@example.com",
    },
    {
      user_id: 2,
      username: "jane_smith",
      password: "Password123!",
      email: "jane.smith@example.com",
    },
    {
      user_id: 3,
      username: "mary_johnson",
      password: "SecureP@ss",
      email: "mary.johnson@example.com",
    },
  ],
  inboxes: [
    {
      inbox_id: 1,
      user_id: 1,
      name: "Primary Inbox",
    },
    {
      inbox_id: 2,
      user_id: 2,
      name: "Work Inbox",
    },
    {
      inbox_id: 3,
      user_id: 3,
      name: "Social Inbox",
    },
  ],
  emails: [
    {
      email_id: 1,
      sender_id: 2,
      recipient_id: 1,
      subject: "Hello",
      body: "Hi John, how are you?",
      timestamp: "2023-07-06 15:30:00",
    },
    {
      email_id: 2,
      sender_id: 1,
      recipient_id: 2,
      subject: "Meeting Reminder",
      body: "Just a reminder that we have a meeting tomorrow at 10 AM.",
      timestamp: "2023-07-07 09:00:00",
    },
  ],
  attachments: [
    {
      attachment_id: 1,
      email_id: 1,
      file_name: "document.pdf",
      file_size: "1.2MB",
      file_type: "application/pdf",
    },
    {
      attachment_id: 2,
      email_id: 2,
      file_name: "agenda.docx",
      file_size: "750KB",
      file_type:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
  ],
};

// Generate fake users
const generateUsers = (count) => {
  const users = [];
  for (let i = 1; i <= count; i++) {
    const user = {
      user_id: i,
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
    };
    users.push(user);
  }
  return users;
};

// Generate fake inboxes
const generateInboxes = (users) => {
  const inboxes = [];
  users.forEach((user) => {
    const inbox = {
      inbox_id: user.user_id,
      user_id: user.user_id,
      name: faker.lorem.words({ min: 1, max: 3 }),
    };
    inboxes.push(inbox);
  });
  return inboxes;
};

// Generate fake emails
const generateEmails = (users, count) => {
  const emails = [];
  for (let i = 1; i <= count; i++) {
    const sender = faker.helpers.arrayElement(users);
    const recipient = faker.helpers.arrayElement(
      users.filter((u) => u.user_id !== sender.user_id)
    );
    const email = {
      email_id: i,
      sender_id: sender.user_id,
      recipient_id: recipient.user_id,
      status: faker.helpers.arrayElement([
        "sent",
        "draft",
        "deleted",
        "spam",
        "attatchment",
        "archived",
        "starred",
      ]),
      subject: faker.lorem.sentence({ min: 3, max: 8 }),
      body: faker.lorem.paragraph({ min: 8, max: 20 }),
      timestamp: faker.date.past(),
    };
    emails.push(email);
  }
  return emails;
};

// Generate fake attachments
const generateAttachments = (emails, count) => {
  const attachments = [];
  for (let i = 1; i <= count; i++) {
    const email = faker.helpers.arrayElement(emails);
    const attachment = {
      attachment_id: i,
      email_id: email.email_id,
      file_name: faker.system.fileName(),
      file_size: faker.number.int() + "KB",
      file_type: faker.system.fileType(),
    };
    attachments.push(attachment);
  }
  return attachments;
};

// Generate fake data
const generateFakeData = () => {
  const users = generateUsers(3);
  const inboxes = generateInboxes(users);
  const emails = generateEmails(users, 100);
  const attachments = generateAttachments(emails, 2);

  return {
    users,
    inboxes,
    emails,
    attachments,
  };
};

// Usage
export const fakeData = generateFakeData();
export const emails = fakeData.emails;
// console.log(fakeData);
