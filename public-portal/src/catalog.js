// AUTO-GENERATED from Jira by gen_catalog_js.py — do not edit by hand.
export const PORTALS = [
  {
    "id": "contractual_people_helpdesk",
    "name": "Contractual People HelpDesk",
    "description": "Welcome! You can raise a request for the Contractual People HelpDesk using the options provided.",
    "featured": false,
    "is_people": true
  },
  {
    "id": "core_people_helpdesk",
    "name": "Core People Helpdesk",
    "description": "Welcome! You can raise a request for the Core People Helpdesk using the options provided.",
    "featured": false,
    "is_people": true
  },
  {
    "id": "data_engineering",
    "name": "Data Engineering",
    "description": "Welcome! You can raise a request for the Data Engineering using the options provided.",
    "featured": false,
    "is_people": false
  },
  {
    "id": "it_service_desk",
    "name": "IT Service Desk",
    "description": "Welcome! You can raise a request for the IT Service Desk using the options provided.",
    "featured": true,
    "is_people": false
  },
  {
    "id": "people_help_desk_contractual",
    "name": "People Help Desk (Contractual)",
    "description": "Welcome! You can raise a request for the People Help Desk (Contractual) using the options provided.",
    "featured": false,
    "is_people": true
  },
  {
    "id": "platform_engineering",
    "name": "Platform Engineering",
    "description": "Welcome! You can raise a request for the Platform Engineering using the options provided.",
    "featured": false,
    "is_people": false
  },
  {
    "id": "travel_desk",
    "name": "Travel Desk",
    "description": "Welcome! You can raise a request for the Travel Desk using the options provided.",
    "featured": false,
    "is_people": false
  }
];

export const PORTAL_REQUESTS = {
  "contractual_people_helpdesk": [
    {
      "type": "contractual_people_helpdesk__change_request",
      "label": "Change request",
      "description": "Send a request to make changes to your information.",
      "group": "General",
      "fields": [
        {
          "key": "summary",
          "label": "What information do you need changed?",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Provide the details of your change request",
          "type": "text",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Please attach relevant documents",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "contractual_people_helpdesk__employee_offboarding",
      "label": "Employee offboarding",
      "description": "Submit an offboarding request for an employee leaving the company.",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10112",
          "label": "Full Name (As per CNIC)",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10150",
          "label": "Colleague Email ID",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10127",
          "label": "Job Title",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10122",
          "label": "Function                            ",
          "type": "select",
          "required": true,
          "options": [
            "Analytics",
            "Brand",
            "Customer Experience",
            "Engineering",
            "Finance",
            "Industrial",
            "IT",
            "Operations",
            "People & Workplace Services",
            "Procurement",
            "Product",
            "Retail",
            "Strategy",
            "PRO"
          ]
        },
        {
          "key": "customfield_10130",
          "label": "Resignation date",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10129",
          "label": "Last working day",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10131",
          "label": "City",
          "type": "select",
          "required": true,
          "options": [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Multan",
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Peshawar",
            "Sukkur",
            "Hyderabad",
            "Sailkot",
            "Khairpur"
          ]
        },
        {
          "key": "customfield_10132",
          "label": "Contact Number",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10367",
          "label": "Comments",
          "type": "text",
          "required": false
        }
      ]
    },
    {
      "type": "contractual_people_helpdesk__employee_onboarding",
      "label": "Employee onboarding",
      "description": "Submit an onboarding request for a new hire.",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10112",
          "label": "Employee Name (As per CNIC)",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10136",
          "label": "CNIC Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10132",
          "label": "Contact Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10133",
          "label": "Date of Joining",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10114",
          "label": "Personal Email ID",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10113",
          "label": "Preferred Email ID",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10127",
          "label": "Job Title",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10122",
          "label": "Department",
          "type": "select",
          "required": true,
          "options": [
            "Analytics",
            "Brand",
            "Customer Experience",
            "Engineering",
            "Finance",
            "Industrial",
            "IT",
            "Operations",
            "People & Workplace Services",
            "Procurement",
            "Product",
            "Retail",
            "Strategy",
            "PRO"
          ]
        },
        {
          "key": "customfield_10149",
          "label": "Line Manager (Email)",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10131",
          "label": "City",
          "type": "select",
          "required": true,
          "options": [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Multan",
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Peshawar",
            "Sukkur",
            "Hyderabad",
            "Sailkot",
            "Khairpur"
          ]
        },
        {
          "key": "customfield_10160",
          "label": "IT Essentials",
          "type": "multiselect",
          "required": false,
          "options": [
            "Laptop",
            "Slack",
            "Gmail ID",
            "Commando ID",
            "Nucleus ID",
            "SIM",
            "Not Applicable"
          ]
        },
        {
          "key": "customfield_10367",
          "label": "Comments",
          "type": "text",
          "required": false
        }
      ]
    },
    {
      "type": "contractual_people_helpdesk__questions_for_hr",
      "label": "Questions for HR",
      "description": "Send us a question or make a general request.",
      "group": "General",
      "fields": [
        {
          "key": "summary",
          "label": "What is your question or general request?",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "contractual_people_helpdesk__emailed_request",
      "label": "Emailed request",
      "description": "Request received from your email support channel.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Subject",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Body",
          "type": "text",
          "required": false
        }
      ]
    }
  ],
  "core_people_helpdesk": [
    {
      "type": "core_people_helpdesk__bz_internal_transfer",
      "label": "BZ Internal Transfer",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10126",
          "label": "Employment type",
          "type": "select",
          "required": true,
          "options": [
            "Permanent - Full Time",
            "Permanent - Part Time",
            "Contractual",
            "P - Band",
            "Consultant",
            "Intern",
            "Trainee"
          ]
        },
        {
          "key": "customfield_10112",
          "label": "Colleague Full Name",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10158",
          "label": "Colleague ID",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10150",
          "label": "Colleague Email ID",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10161",
          "label": "Type of Movement",
          "type": "multiselect",
          "required": true,
          "options": [
            "Short term relocation",
            "Cross function role change",
            "Redesignation",
            "Other (Please define in description)",
            "Long Term Transfer"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10152",
          "label": "Effective Date",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10127",
          "label": "New Job title",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10165",
          "label": "New Function",
          "type": "select",
          "required": true,
          "options": [
            "Administration",
            "Analytics",
            "Retail",
            "Brand",
            "Customer Experience",
            "Design",
            "Director",
            "EasyKhata",
            "Engineering",
            "Finance & Strategy",
            "IT",
            "Operations",
            "People",
            "Product",
            "Safety & Security",
            "Industrial"
          ]
        },
        {
          "key": "customfield_10166",
          "label": "New Location",
          "type": "select",
          "required": true,
          "options": [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Hyderabad",
            "Sukkur",
            "Multan",
            "Faisalabad",
            "Bahawalpur",
            "Gujranwala",
            "Peshawar",
            "Others (Please specify)"
          ]
        },
        {
          "key": "customfield_10163",
          "label": "New Line Manager (Email)",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10164",
          "label": "Change in benefit",
          "type": "text",
          "required": false
        },
        {
          "key": "customfield_10278",
          "label": "Reason for Hire",
          "type": "radio",
          "required": true,
          "options": [
            "New Position",
            "Replacement",
            "Internal Movement"
          ]
        }
      ]
    },
    {
      "type": "core_people_helpdesk__colleague_offboarding",
      "label": "Colleague Offboarding",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10112",
          "label": "Full Name",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10126",
          "label": "Employment type",
          "type": "select",
          "required": true,
          "options": [
            "Permanent - Full Time",
            "Permanent - Part Time",
            "Contractual",
            "P - Band",
            "Consultant",
            "Intern",
            "Trainee"
          ]
        },
        {
          "key": "customfield_10150",
          "label": "Colleague Email ID",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10122",
          "label": "Department",
          "type": "select",
          "required": true,
          "options": [
            "Analytics",
            "Brand",
            "Customer Experience",
            "Engineering",
            "Finance",
            "Industrial",
            "IT",
            "Operations",
            "People & Workplace Services",
            "Procurement",
            "Product",
            "Retail",
            "Strategy",
            "PRO"
          ]
        },
        {
          "key": "customfield_10127",
          "label": "Job Title",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10130",
          "label": "Resignation date",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10129",
          "label": "Last working day",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10131",
          "label": "City",
          "type": "select",
          "required": true,
          "options": [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Multan",
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Peshawar",
            "Sukkur",
            "Hyderabad",
            "Sailkot",
            "Khairpur"
          ]
        },
        {
          "key": "customfield_10132",
          "label": "Contact Number",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "core_people_helpdesk__colleague_onboarding",
      "label": "Colleague Onboarding",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10112",
          "label": "Full Name",
          "type": "text",
          "required": false
        },
        {
          "key": "customfield_10133",
          "label": "Date of Joining",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10126",
          "label": "Employment type",
          "type": "select",
          "required": true,
          "options": [
            "Permanent - Full Time",
            "Permanent - Part Time",
            "Contractual",
            "P - Band",
            "Consultant",
            "Intern",
            "Trainee"
          ]
        },
        {
          "key": "customfield_10134",
          "label": "Previous Employment",
          "type": "text",
          "required": true,
          "hint": "Must be complete organization name"
        },
        {
          "key": "customfield_10135",
          "label": "Work Experience",
          "type": "select",
          "required": true,
          "options": [
            "0.5",
            "1",
            "1.5",
            "2",
            "2.5",
            "3",
            "3.5",
            "4",
            "4.5",
            "5",
            "5.5",
            "6",
            "6.5",
            "7",
            "7.5",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16"
          ]
        },
        {
          "key": "customfield_10114",
          "label": "Personal Email ID",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10113",
          "label": "Preferred Email ID (Work)",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10149",
          "label": "Line Manager (Email)",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10136",
          "label": "CNIC Number",
          "type": "text",
          "required": true,
          "hint": "XXXXX-XXXXXXXX-X"
        },
        {
          "key": "customfield_10132",
          "label": "Contact Number",
          "type": "text",
          "required": true,
          "hint": "03XXXXXXXXX"
        },
        {
          "key": "customfield_10127",
          "label": "Job Title",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10122",
          "label": "Department",
          "type": "select",
          "required": true,
          "options": [
            "Analytics",
            "Brand",
            "Customer Experience",
            "Engineering",
            "Finance",
            "Industrial",
            "IT",
            "Operations",
            "People & Workplace Services",
            "Procurement",
            "Product",
            "Retail",
            "Strategy",
            "PRO"
          ]
        },
        {
          "key": "customfield_10151",
          "label": "Relocation Required",
          "type": "radio",
          "required": true,
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "key": "customfield_10131",
          "label": "City",
          "type": "select",
          "required": true,
          "options": [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Multan",
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Peshawar",
            "Sukkur",
            "Hyderabad",
            "Sailkot",
            "Khairpur"
          ]
        },
        {
          "key": "customfield_10160",
          "label": "IT Essentials",
          "type": "multiselect",
          "required": true,
          "options": [
            "Laptop",
            "Slack",
            "Gmail ID",
            "Commando ID",
            "Nucleus ID",
            "SIM",
            "Not Applicable"
          ]
        },
        {
          "key": "customfield_10278",
          "label": "Reason for Hire",
          "type": "radio",
          "required": true,
          "options": [
            "New Position",
            "Replacement",
            "Internal Movement"
          ]
        }
      ]
    },
    {
      "type": "core_people_helpdesk__requisition_form",
      "label": "Requisition Form",
      "description": "For people partner only",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10127",
          "label": "Job Title",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10131",
          "label": "City",
          "type": "select",
          "required": true,
          "options": [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Multan",
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Peshawar",
            "Sukkur",
            "Hyderabad",
            "Sailkot",
            "Khairpur"
          ]
        },
        {
          "key": "customfield_10278",
          "label": "Reason for Hire",
          "type": "radio",
          "required": true,
          "options": [
            "New Position",
            "Replacement",
            "Internal Movement"
          ]
        },
        {
          "key": "customfield_10283",
          "label": "Notice Period End Date (If replacement)",
          "type": "date",
          "required": false
        },
        {
          "key": "customfield_10279",
          "label": "Replacement/ Internal movement",
          "type": "text",
          "required": false
        },
        {
          "key": "customfield_10112",
          "label": "Full Name",
          "type": "text",
          "required": false
        },
        {
          "key": "customfield_10122",
          "label": "Department",
          "type": "select",
          "required": true,
          "options": [
            "Analytics",
            "Brand",
            "Customer Experience",
            "Engineering",
            "Finance",
            "Industrial",
            "IT",
            "Operations",
            "People & Workplace Services",
            "Procurement",
            "Product",
            "Retail",
            "Strategy",
            "PRO"
          ]
        },
        {
          "key": "customfield_10280",
          "label": "Band (Core)",
          "type": "select",
          "required": true,
          "options": [
            "H1",
            "H2",
            "M1",
            "M2",
            "M3",
            "L",
            "A",
            "E1",
            "E2",
            "E3",
            "E4",
            "E5",
            "E6",
            "E7",
            "APD",
            "PD",
            "PD-1",
            "SPD-1",
            "SPD-2",
            "APM",
            "PM-1",
            "PM-2",
            "SPM",
            "3P",
            "Project Trainee",
            "Intern",
            "PD 2",
            "GPM",
            "Other"
          ]
        },
        {
          "key": "customfield_10149",
          "label": "Line Manager",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10281",
          "label": "Hiring Priority",
          "type": "select",
          "required": true,
          "options": [
            "High",
            "Medium",
            "Low"
          ]
        },
        {
          "key": "attachment",
          "label": "JD Attachment",
          "type": "file",
          "required": true
        },
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "core_people_helpdesk__change_request",
      "label": "Change request",
      "description": "Send a request to make changes to your information.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "What information do you need changed?",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Provide the details of your change request",
          "type": "text",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Please attach relevant documents",
          "type": "file",
          "required": false
        },
        {
          "key": "customfield_10278",
          "label": "Reason for Hire",
          "type": "radio",
          "required": true,
          "options": [
            "New Position",
            "Replacement",
            "Internal Movement"
          ]
        }
      ]
    },
    {
      "type": "core_people_helpdesk__emailed_request",
      "label": "Emailed request",
      "description": "Request received from your email support channel.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Subject",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Body",
          "type": "text",
          "required": false
        },
        {
          "key": "customfield_10278",
          "label": "Reason for Hire",
          "type": "radio",
          "required": true,
          "options": [
            "New Position",
            "Replacement",
            "Internal Movement"
          ]
        }
      ]
    },
    {
      "type": "core_people_helpdesk__employee_offboarding",
      "label": "Employee offboarding",
      "description": "Submit an offboarding request for an employee leaving the company.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "What is the employee name?",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10129",
          "label": "When is their last working day?",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10130",
          "label": "What is the employee's resignation date?",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10125",
          "label": "Where is the employee located?",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10126",
          "label": "What is their employment type?",
          "type": "select",
          "required": true,
          "options": [
            "Permanent - Full Time",
            "Permanent - Part Time",
            "Contractual",
            "P - Band",
            "Consultant",
            "Intern",
            "Trainee"
          ]
        },
        {
          "key": "customfield_10127",
          "label": "What is the employee's job title?",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10128",
          "label": "Who is the employee's manager?",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "What software or hardware does the employee have?",
          "type": "text",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Resignation letter",
          "type": "file",
          "required": false
        },
        {
          "key": "customfield_10278",
          "label": "Reason for Hire",
          "type": "radio",
          "required": true,
          "options": [
            "New Position",
            "Replacement",
            "Internal Movement"
          ]
        }
      ]
    },
    {
      "type": "core_people_helpdesk__employee_onboarding",
      "label": "Employee onboarding",
      "description": "Submit an onboarding request for a new hire.",
      "group": null,
      "fields": [
        {
          "key": "customfield_10124",
          "label": "What date does the employee start?",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10125",
          "label": "Where is the employee located?",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10126",
          "label": "What is their employment type?",
          "type": "select",
          "required": true,
          "options": [
            "Permanent - Full Time",
            "Permanent - Part Time",
            "Contractual",
            "P - Band",
            "Consultant",
            "Intern",
            "Trainee"
          ]
        },
        {
          "key": "customfield_10127",
          "label": "What is the employee's job title?",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10128",
          "label": "Who is the employee's manager?",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "What software or hardware will the employee require?",
          "type": "text",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Offer letter",
          "type": "file",
          "required": false
        },
        {
          "key": "customfield_10278",
          "label": "Reason for Hire",
          "type": "radio",
          "required": true,
          "options": [
            "New Position",
            "Replacement",
            "Internal Movement"
          ]
        }
      ]
    },
    {
      "type": "core_people_helpdesk__questions_for_hr",
      "label": "Questions for HR",
      "description": "Send us a question or make a general request.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "What is your question or general request?",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10278",
          "label": "Reason for Hire",
          "type": "radio",
          "required": true,
          "options": [
            "New Position",
            "Replacement",
            "Internal Movement"
          ]
        }
      ]
    }
  ],
  "data_engineering": [
    {
      "type": "data_engineering__addition_of_columns_in_raw_table",
      "label": "Addition of columns in raw table",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "P1",
            "P2",
            "P3",
            "P4",
            "P5"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "data_engineering__addition_of_new_raw_table",
      "label": "Addition of new raw table",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "P1",
            "P2",
            "P3",
            "P4",
            "P5"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "data_engineering__adhoc_request",
      "label": "Adhoc request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "P1",
            "P2",
            "P3",
            "P4",
            "P5"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "data_engineering__changes_in_data_product",
      "label": "Changes in data product",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "P1",
            "P2",
            "P3",
            "P4",
            "P5"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "data_engineering__data_quality",
      "label": "Data Quality",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "P1",
            "P2",
            "P3",
            "P4",
            "P5"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "data_engineering__downtime",
      "label": "Downtime",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "P1",
            "P2",
            "P3",
            "P4",
            "P5"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "data_engineering__new_data_product",
      "label": "New data product",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "P1",
            "P2",
            "P3",
            "P4",
            "P5"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "data_engineering__pipeline_failures",
      "label": "Pipeline failures",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "P1",
            "P2",
            "P3",
            "P4",
            "P5"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "data_engineering__emailed_request",
      "label": "Emailed request",
      "description": "Request received from your email support channel.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Subject",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Body",
          "type": "text",
          "required": false
        }
      ]
    }
  ],
  "it_service_desk": [
    {
      "type": "it_service_desk__aws_access",
      "label": "AWS Access",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10240",
          "label": "AWS Access",
          "type": "select",
          "required": true,
          "options": [
            "Product",
            "Design",
            "Engineering",
            "Platform",
            "Data Engineering",
            "Data Science",
            "Data Analytics",
            "SandBox"
          ]
        },
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__commando_access_request",
      "label": "Commando access request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10090",
          "label": "Commando Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Ops",
            "Commando God",
            "Ops Supervisor",
            "Gro-mance",
            "Munshi",
            "The Right-hand",
            "Finance",
            "Marketplace Manager",
            "Commerical Supervisor",
            "Commercials",
            "Growth King",
            "Brand Manager",
            "Care Supervisor",
            "Care Manager",
            "Care Agent",
            "S&P L1",
            "S&P L2",
            "S&P L3",
            "Commando - QA",
            "Caps Upload",
            "Rider Manager",
            "Growth Super User",
            "Sales Return",
            "Zone Update",
            "TL-Store Verification",
            "Commercial Super User",
            "Agent Creation"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__create_new_platform_role",
      "label": "Create New Platform Role",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10156",
          "label": "Client Name",
          "type": "select",
          "required": true,
          "options": [
            "Commando",
            "Nucleus",
            "Shipper App",
            "Agent App",
            "Customer App",
            "Khata App",
            "Partner Portal",
            "Deposit provider",
            "Warehouse Operations App"
          ]
        },
        {
          "key": "customfield_10157",
          "label": "Role Name",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description (Please mention required scopes)",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__elevate",
      "label": "Elevate",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10433",
          "label": "Type of Issue",
          "type": "multiselect",
          "required": false,
          "options": [
            "New Installation",
            "Relocation",
            "Dismantling ",
            "Trouble shooting"
          ]
        },
        {
          "key": "customfield_10435",
          "label": "Edit Shop Name and location",
          "type": "textarea",
          "required": false
        },
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__google_workspace_request",
      "label": "Google Workspace Request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10082",
          "label": "Google Workspace Request",
          "type": "select",
          "required": true,
          "options": [
            "Password Reset",
            "Google Device Policy Exemption",
            "Team Drive",
            "Google Group",
            "Account Creation",
            "G-Sheet Ownership Transfer",
            "G-Drive Ownership Transfer"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__greensight_bazaar",
      "label": "GreenSight Bazaar",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__hardware_support_request",
      "label": "Hardware Support Request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10081",
          "label": "Hardware Request/Issue",
          "type": "select",
          "required": true,
          "options": [
            "Desktop",
            "Keyboard/Mouse (Tech Only)",
            "Laptop",
            "LCD Monitor (Tech Only)",
            "Mobile Phones (App Testing Team Only)",
            "Workstation (Tech Only)",
            "Laptop Charger",
            "RAM Change/Upgrade",
            "Laptop Battery",
            "Laptop Keyboard"
          ]
        },
        {
          "key": "description",
          "label": "Why do you need this?",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__incident_request",
      "label": "Incident Request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10194",
          "label": "Effected user",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10092",
          "label": "Incident Occurred",
          "type": "select",
          "required": true,
          "options": [
            "Application",
            "Network",
            "Hardware"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__infra_incident",
      "label": "Infra Incident",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10194",
          "label": "Effected user",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": false,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__lending_portal",
      "label": "Lending Portal",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10137",
          "label": "Lending Portal Module",
          "type": "select",
          "required": true,
          "options": [
            "Lending Collection Core",
            "Lending Army Chief",
            "Lending Biz Core",
            "Army Chief - Industrial",
            "Lending Professional - Fintech",
            "Lending Professional KAM"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__mixpanel",
      "label": "MixPanel",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10159",
          "label": "MixPanel Access Required",
          "type": "select",
          "required": true,
          "options": [
            "Bazaar Customer App",
            "Easy Khata",
            "Bazaar Warehouse App",
            "Rider App"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__nucleus_access_request",
      "label": "Nucleus Access Request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10097",
          "label": "Nucleus Module",
          "type": "select",
          "required": true,
          "options": [
            "Fleet Manager",
            "Fleet Supervisor",
            "Fleet Executive",
            "Ticket Resolver",
            "Prime Admin",
            "Promo Manager",
            "CAMPAIGN_MASTER",
            "Agent Team Lead",
            "Cash Tower Cash Officer",
            "Live Ops Care",
            "Nucleus Liveops Executive",
            "Customer All Access",
            "PO_FINANCE_SUPERVISOR",
            "Commercials Manager",
            "INVOICE_RESOLVER",
            "Catalog View And Create Product",
            "Commercials Brand Manager",
            "catalog pricing supervisor",
            "INVOICE_FINANCE",
            "Vedor Management (FINANCE)",
            "CATALOG_COMMERCIAL",
            "CATALOG_FINANCE",
            "Catalog Other Details",
            "Catalog All Access",
            "Order (Finance - Industrial)",
            "General Order Creator",
            "CATALOG_VIEWER",
            "Order Discount Editor",
            "Vendor View",
            "Ghalib Admin",
            "Dropship Fulfilment-Ops",
            "WMS Super User",
            "Chief Justice - Order",
            "Cash Tower - Collection Supervisor",
            "CATALOG_MASTER",
            "Promo View",
            "catalog pricing viewer",
            "Customer Campaign Master",
            "Order Manager",
            "Vendor Create",
            "BA Executive",
            "WMS COMMERCIALS",
            "Discount Approval Manager",
            "Order All Access",
            "INVOICE_CONTROLLER",
            "CATALOG_OPS",
            "Partner Manager",
            "Order (Commercial - Industrial)",
            "Discount Order Creator",
            "WMS Finance",
            "Vendor Management (FINANCE)",
            "PRIME_KPO",
            "catalog pricing",
            "Order (Operations - Industrial)",
            "Cycle Count View Only",
            "Nucleus Order View",
            "Retail - Customer Update",
            "BD Industrial",
            "Bundle Create",
            "Cycle Count Initiation",
            "IRD executive",
            "IRM",
            "Lending Collection Core",
            "Lending Army Chief",
            "Lending Biz Core",
            "PO COMMERCIALS",
            "PO_COMMERCIALS_SUPERVISOR",
            "PO FINANCE",
            "BR Executive",
            "Route Viewer",
            "Route Planner",
            "Cycle Count Master",
            "WMS OPS Supervisor",
            "WMS OPS",
            "WMS Packer",
            "Customer Module - View",
            "Customer Module - Update",
            "Route Viewer - Routing Executive",
            "Route Planner - Routing Supervisor",
            "Sales Return",
            "Sales Return Approver",
            "Demand Quotation",
            "Cash Tower Cash Supervisor"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__other",
      "label": "Other",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__platform_scopes_add_remove",
      "label": "Platform Scopes Add/Remove",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10155",
          "label": "Action",
          "type": "select",
          "required": true,
          "options": [
            "Add",
            "Remove"
          ]
        },
        {
          "key": "customfield_10154",
          "label": "Platform Client",
          "type": "select",
          "required": true,
          "options": [
            "Commando",
            "Nucleus",
            "Deposit Provider",
            "Lending Portal",
            "Partner Portal",
            "Shipper App",
            "Customer App",
            "Agent App",
            "Warehouse Operation App"
          ]
        },
        {
          "key": "description",
          "label": "Description (Please mention scopes)",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__report_a_system_problem",
      "label": "Report a system problem",
      "description": "Let us know if something isn't working properly and we'll aim to get it back up and running quickly.",
      "group": "General",
      "fields": [
        {
          "key": "summary",
          "label": "Summarize the problem",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__software_license_request",
      "label": "Software License Request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10084",
          "label": "Software license required",
          "type": "select",
          "required": true,
          "options": [
            "MS Office",
            "Adobe Creative Cloud",
            "Figma"
          ]
        },
        {
          "key": "customfield_10085",
          "label": "Request for",
          "type": "multiselect",
          "required": true,
          "options": [
            "Installation",
            "License"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__superset_access_request",
      "label": "SuperSet Access Request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10079",
          "label": "Burraq Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Care",
            "CSV",
            "Engineering",
            "Finance",
            "Finance Executives",
            "Fintech performance",
            "Growth Performance",
            "Marketplace",
            "Marketplace Core",
            "Operation performance",
            "Industrial"
          ],
          "hint": "h5. Please follow the [burraq access sheet | https://docs.google.com/spreadsheets/d/1gMFwDuBHvgmYHPiYcjYwRNsHgormwAsxjyGgx0NDQ/edit?usp=sharing] for access request:"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__teleport_access",
      "label": "Teleport Access",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10193",
          "label": "Squad",
          "type": "select",
          "required": true,
          "options": [
            "PM",
            "Data",
            "OPS",
            "Fintech",
            "Care",
            "Biz",
            "Khaata"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__change_of_term",
      "label": "Change of Term",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__colleague_offboarding",
      "label": "Colleague Offboarding",
      "description": "",
      "group": null,
      "fields": []
    },
    {
      "type": "it_service_desk__colleague_onboarding",
      "label": "Colleague Onboarding",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10112",
          "label": "Full Name",
          "type": "text",
          "required": false
        },
        {
          "key": "customfield_10113",
          "label": "Preferred Email ID",
          "type": "email",
          "required": false
        },
        {
          "key": "customfield_10114",
          "label": "Personal Email ID",
          "type": "email",
          "required": false
        },
        {
          "key": "customfield_10127",
          "label": "Job Title",
          "type": "text",
          "required": false
        },
        {
          "key": "customfield_10133",
          "label": "Date of Joining",
          "type": "date",
          "required": false
        },
        {
          "key": "customfield_10160",
          "label": "IT Essentials",
          "type": "multiselect",
          "required": false,
          "options": [
            "Laptop",
            "Slack",
            "Gmail ID",
            "Commando ID",
            "Nucleus ID",
            "SIM",
            "Not Applicable"
          ]
        },
        {
          "key": "customfield_10208",
          "label": "Application Requested",
          "type": "select",
          "required": false,
          "options": [
            "Application",
            "Platform",
            "Other",
            "Software",
            "Hardware",
            "Onboarding",
            "Offboarding",
            "Change of Term",
            "Incident"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__commando_access_request_2",
      "label": "Commando Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10090",
          "label": "Commando Access Module (Role)",
          "type": "select",
          "required": false,
          "options": [
            "Ops",
            "Commando God",
            "Ops Supervisor",
            "Gro-mance",
            "Munshi",
            "The Right-hand",
            "Finance",
            "Marketplace Manager",
            "Commerical Supervisor",
            "Commercials",
            "Growth King",
            "Brand Manager",
            "Care Supervisor",
            "Care Manager",
            "Care Agent",
            "S&P L1",
            "S&P L2",
            "S&P L3",
            "Commando - QA",
            "Caps Upload",
            "Rider Manager",
            "Growth Super User",
            "Sales Return",
            "Zone Update",
            "TL-Store Verification",
            "Commercial Super User",
            "Agent Creation"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__commando_access_request_3",
      "label": "Commando Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10090",
          "label": "Commando Access Module (Role)",
          "type": "select",
          "required": false,
          "options": [
            "Ops",
            "Commando God",
            "Ops Supervisor",
            "Gro-mance",
            "Munshi",
            "The Right-hand",
            "Finance",
            "Marketplace Manager",
            "Commerical Supervisor",
            "Commercials",
            "Growth King",
            "Brand Manager",
            "Care Supervisor",
            "Care Manager",
            "Care Agent",
            "S&P L1",
            "S&P L2",
            "S&P L3",
            "Commando - QA",
            "Caps Upload",
            "Rider Manager",
            "Growth Super User",
            "Sales Return",
            "Zone Update",
            "TL-Store Verification",
            "Commercial Super User",
            "Agent Creation"
          ]
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__commando_access_request_4",
      "label": "Commando Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10090",
          "label": "Commando Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Ops",
            "Commando God",
            "Ops Supervisor",
            "Gro-mance",
            "Munshi",
            "The Right-hand",
            "Finance",
            "Marketplace Manager",
            "Commerical Supervisor",
            "Commercials",
            "Growth King",
            "Brand Manager",
            "Care Supervisor",
            "Care Manager",
            "Care Agent",
            "S&P L1",
            "S&P L2",
            "S&P L3",
            "Commando - QA",
            "Caps Upload",
            "Rider Manager",
            "Growth Super User",
            "Sales Return",
            "Zone Update",
            "TL-Store Verification",
            "Commercial Super User",
            "Agent Creation"
          ]
        },
        {
          "key": "customfield_10095",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Administration",
            "Finance",
            "Fintech",
            "Legal",
            "Strategy"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__commando_access_request_5",
      "label": "Commando Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10090",
          "label": "Commando Access Module (Role)",
          "type": "select",
          "required": false,
          "options": [
            "Ops",
            "Commando God",
            "Ops Supervisor",
            "Gro-mance",
            "Munshi",
            "The Right-hand",
            "Finance",
            "Marketplace Manager",
            "Commerical Supervisor",
            "Commercials",
            "Growth King",
            "Brand Manager",
            "Care Supervisor",
            "Care Manager",
            "Care Agent",
            "S&P L1",
            "S&P L2",
            "S&P L3",
            "Commando - QA",
            "Caps Upload",
            "Rider Manager",
            "Growth Super User",
            "Sales Return",
            "Zone Update",
            "TL-Store Verification",
            "Commercial Super User",
            "Agent Creation"
          ]
        },
        {
          "key": "customfield_10096",
          "label": "Departments",
          "type": "select",
          "required": false,
          "options": [
            "Fulfilment",
            "Last Mile",
            "Ops Planning and Performance"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": false
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": false,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__commando_access_request_6",
      "label": "Commando Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10090",
          "label": "Commando Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Ops",
            "Commando God",
            "Ops Supervisor",
            "Gro-mance",
            "Munshi",
            "The Right-hand",
            "Finance",
            "Marketplace Manager",
            "Commerical Supervisor",
            "Commercials",
            "Growth King",
            "Brand Manager",
            "Care Supervisor",
            "Care Manager",
            "Care Agent",
            "S&P L1",
            "S&P L2",
            "S&P L3",
            "Commando - QA",
            "Caps Upload",
            "Rider Manager",
            "Growth Super User",
            "Sales Return",
            "Zone Update",
            "TL-Store Verification",
            "Commercial Super User",
            "Agent Creation"
          ]
        },
        {
          "key": "customfield_10093",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Commercials",
            "Marketplace",
            "New Verticals",
            "Performance and Planning",
            "Retail Ops"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__commando_access_request_7",
      "label": "Commando Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10090",
          "label": "Commando Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Ops",
            "Commando God",
            "Ops Supervisor",
            "Gro-mance",
            "Munshi",
            "The Right-hand",
            "Finance",
            "Marketplace Manager",
            "Commerical Supervisor",
            "Commercials",
            "Growth King",
            "Brand Manager",
            "Care Supervisor",
            "Care Manager",
            "Care Agent",
            "S&P L1",
            "S&P L2",
            "S&P L3",
            "Commando - QA",
            "Caps Upload",
            "Rider Manager",
            "Growth Super User",
            "Sales Return",
            "Zone Update",
            "TL-Store Verification",
            "Commercial Super User",
            "Agent Creation"
          ]
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10096",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Fulfilment",
            "Last Mile",
            "Ops Planning and Performance"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__control_tower_access_request",
      "label": "Control Tower Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10091",
          "label": "Control Tower Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "LiveOps Default",
            "Supervisor Cash Officer",
            "Live Ops Care",
            "Live Ops Cash Officer"
          ]
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": false,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__control_tower_access_request_2",
      "label": "Control Tower Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10091",
          "label": "Control Tower Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "LiveOps Default",
            "Supervisor Cash Officer",
            "Live Ops Care",
            "Live Ops Cash Officer"
          ]
        },
        {
          "key": "customfield_10077",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Brand",
            "Industrial",
            "New Verticals",
            "People",
            "Safety & Security",
            "Care"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__control_tower_access_request_3",
      "label": "Control Tower Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10091",
          "label": "Control Tower Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "LiveOps Default",
            "Supervisor Cash Officer",
            "Live Ops Care",
            "Live Ops Cash Officer"
          ]
        },
        {
          "key": "customfield_10095",
          "label": "Departments",
          "type": "select",
          "required": false,
          "options": [
            "Administration",
            "Finance",
            "Fintech",
            "Legal",
            "Strategy"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__control_tower_access_request_4",
      "label": "Control Tower Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10091",
          "label": "Control Tower Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "LiveOps Default",
            "Supervisor Cash Officer",
            "Live Ops Care",
            "Live Ops Cash Officer"
          ]
        },
        {
          "key": "customfield_10096",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Fulfilment",
            "Last Mile",
            "Ops Planning and Performance"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__control_tower_access_request_5",
      "label": "Control Tower Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10091",
          "label": "Control Tower Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "LiveOps Default",
            "Supervisor Cash Officer",
            "Live Ops Care",
            "Live Ops Cash Officer"
          ]
        },
        {
          "key": "customfield_10093",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Commercials",
            "Marketplace",
            "New Verticals",
            "Performance and Planning",
            "Retail Ops"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__emailed_request",
      "label": "Emailed request",
      "description": "Request received from your email support channel.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Subject",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Body",
          "type": "text",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__engineering_database_access",
      "label": "Engineering Database Access",
      "description": "Engineering Database Access",
      "group": null,
      "fields": []
    },
    {
      "type": "it_service_desk__fix_an_account_problem",
      "label": "Fix an account problem",
      "description": "Having trouble accessing certain websites or systems? We'll help you out.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__general_legal_advice_request",
      "label": "General Legal Advice Request",
      "description": "For Legal",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10603",
          "label": "Subject matter",
          "type": "select",
          "required": false,
          "options": [
            "contracts",
            "employment",
            "compliance",
            "corporate governance",
            "Procurement / Vendor Management",
            "Finance / Invoicing",
            "Legal Affairs",
            "renewal"
          ]
        },
        {
          "key": "customfield_10604",
          "label": "Description of query",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10605",
          "label": " Level of urgency",
          "type": "text",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__get_a_guest_wifi_account",
      "label": "Get a guest wifi account",
      "description": "Raise a request to ask for temp wifi access for guests.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "duedate",
          "label": "Guest arrival date",
          "type": "date",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__get_it_help",
      "label": "Get IT help",
      "description": "Get assistance for general IT problems and questions.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__ghalib_access",
      "label": "Ghalib Access",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__google_cloud_training",
      "label": "Google Cloud Training",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__greensight_bazaar_2",
      "label": "GreenSight Bazaar",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__incident_testing",
      "label": "Incident Testing",
      "description": "For testing please ignore",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__keycloak_access",
      "label": "KeyCloak Access",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10193",
          "label": "Squad",
          "type": "select",
          "required": true,
          "options": [
            "PM",
            "Data",
            "OPS",
            "Fintech",
            "Care",
            "Biz",
            "Khaata"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__khata_app",
      "label": "Khata App",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10147",
          "label": "Khata Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "KHATA GOD"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__lending_portal_2",
      "label": "Lending Portal",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10137",
          "label": "Lending Portal Module",
          "type": "select",
          "required": true,
          "options": [
            "Lending Collection Core",
            "Lending Army Chief",
            "Lending Biz Core",
            "Army Chief - Industrial",
            "Lending Professional - Fintech",
            "Lending Professional KAM"
          ]
        },
        {
          "key": "customfield_10095",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Administration",
            "Finance",
            "Fintech",
            "Legal",
            "Strategy"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__mixpanel_2",
      "label": "MixPanel",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10159",
          "label": "MixPanel Access Required",
          "type": "select",
          "required": true,
          "options": [
            "Bazaar Customer App",
            "Easy Khata",
            "Bazaar Warehouse App",
            "Rider App"
          ]
        },
        {
          "key": "customfield_10077",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Brand",
            "Industrial",
            "New Verticals",
            "People",
            "Safety & Security",
            "Care"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__mixpanel_3",
      "label": "MixPanel",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10159",
          "label": "MixPanel Access Required",
          "type": "select",
          "required": true,
          "options": [
            "Bazaar Customer App",
            "Easy Khata",
            "Bazaar Warehouse App",
            "Rider App"
          ]
        },
        {
          "key": "customfield_10095",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Administration",
            "Finance",
            "Fintech",
            "Legal",
            "Strategy"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__mixpanel_4",
      "label": "MixPanel",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10159",
          "label": "MixPanel Access Required",
          "type": "select",
          "required": true,
          "options": [
            "Bazaar Customer App",
            "Easy Khata",
            "Bazaar Warehouse App",
            "Rider App"
          ]
        },
        {
          "key": "customfield_10093",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Commercials",
            "Marketplace",
            "New Verticals",
            "Performance and Planning",
            "Retail Ops"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__mixpanel_5",
      "label": "MixPanel",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10159",
          "label": "MixPanel Access Required",
          "type": "select",
          "required": true,
          "options": [
            "Bazaar Customer App",
            "Easy Khata",
            "Bazaar Warehouse App",
            "Rider App"
          ]
        },
        {
          "key": "customfield_10096",
          "label": "Departments",
          "type": "select",
          "required": false,
          "options": [
            "Fulfilment",
            "Last Mile",
            "Ops Planning and Performance"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__mixpanel_6",
      "label": "MixPanel",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10159",
          "label": "MixPanel Access Required",
          "type": "select",
          "required": true,
          "options": [
            "Bazaar Customer App",
            "Easy Khata",
            "Bazaar Warehouse App",
            "Rider App"
          ]
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__new_jira_request_testing",
      "label": "New Jira Request - Testing",
      "description": "Template for testing",
      "group": null,
      "fields": [
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__new_mobile_device",
      "label": "New mobile device",
      "description": "Need a mobile phone or time for replacement? Let us know.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true,
          "hint": "e.g. New mobile phone for Alice Smith"
        },
        {
          "key": "customfield_10003",
          "label": "Who is your manager?",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Phone details and justification",
          "type": "textarea",
          "required": false,
          "hint": "e.g. 32G or 64G, the size of the screen, etc. Please also fill in why you need this new device"
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__nucleus_access_request_2",
      "label": "Nucleus Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10097",
          "label": "Nucleus Module",
          "type": "select",
          "required": true,
          "options": [
            "Fleet Manager",
            "Fleet Supervisor",
            "Fleet Executive",
            "Ticket Resolver",
            "Prime Admin",
            "Promo Manager",
            "CAMPAIGN_MASTER",
            "Agent Team Lead",
            "Cash Tower Cash Officer",
            "Live Ops Care",
            "Nucleus Liveops Executive",
            "Customer All Access",
            "PO_FINANCE_SUPERVISOR",
            "Commercials Manager",
            "INVOICE_RESOLVER",
            "Catalog View And Create Product",
            "Commercials Brand Manager",
            "catalog pricing supervisor",
            "INVOICE_FINANCE",
            "Vedor Management (FINANCE)",
            "CATALOG_COMMERCIAL",
            "CATALOG_FINANCE",
            "Catalog Other Details",
            "Catalog All Access",
            "Order (Finance - Industrial)",
            "General Order Creator",
            "CATALOG_VIEWER",
            "Order Discount Editor",
            "Vendor View",
            "Ghalib Admin",
            "Dropship Fulfilment-Ops",
            "WMS Super User",
            "Chief Justice - Order",
            "Cash Tower - Collection Supervisor",
            "CATALOG_MASTER",
            "Promo View",
            "catalog pricing viewer",
            "Customer Campaign Master",
            "Order Manager",
            "Vendor Create",
            "BA Executive",
            "WMS COMMERCIALS",
            "Discount Approval Manager",
            "Order All Access",
            "INVOICE_CONTROLLER",
            "CATALOG_OPS",
            "Partner Manager",
            "Order (Commercial - Industrial)",
            "Discount Order Creator",
            "WMS Finance",
            "Vendor Management (FINANCE)",
            "PRIME_KPO",
            "catalog pricing",
            "Order (Operations - Industrial)",
            "Cycle Count View Only",
            "Nucleus Order View",
            "Retail - Customer Update",
            "BD Industrial",
            "Bundle Create",
            "Cycle Count Initiation",
            "IRD executive",
            "IRM",
            "Lending Collection Core",
            "Lending Army Chief",
            "Lending Biz Core",
            "PO COMMERCIALS",
            "PO_COMMERCIALS_SUPERVISOR",
            "PO FINANCE",
            "BR Executive",
            "Route Viewer",
            "Route Planner",
            "Cycle Count Master",
            "WMS OPS Supervisor",
            "WMS OPS",
            "WMS Packer",
            "Customer Module - View",
            "Customer Module - Update",
            "Route Viewer - Routing Executive",
            "Route Planner - Routing Supervisor",
            "Sales Return",
            "Sales Return Approver",
            "Demand Quotation",
            "Cash Tower Cash Supervisor"
          ]
        },
        {
          "key": "customfield_10095",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Administration",
            "Finance",
            "Fintech",
            "Legal",
            "Strategy"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__nucleus_access_request_3",
      "label": "Nucleus Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10097",
          "label": "Nucleus Module",
          "type": "select",
          "required": true,
          "options": [
            "Fleet Manager",
            "Fleet Supervisor",
            "Fleet Executive",
            "Ticket Resolver",
            "Prime Admin",
            "Promo Manager",
            "CAMPAIGN_MASTER",
            "Agent Team Lead",
            "Cash Tower Cash Officer",
            "Live Ops Care",
            "Nucleus Liveops Executive",
            "Customer All Access",
            "PO_FINANCE_SUPERVISOR",
            "Commercials Manager",
            "INVOICE_RESOLVER",
            "Catalog View And Create Product",
            "Commercials Brand Manager",
            "catalog pricing supervisor",
            "INVOICE_FINANCE",
            "Vedor Management (FINANCE)",
            "CATALOG_COMMERCIAL",
            "CATALOG_FINANCE",
            "Catalog Other Details",
            "Catalog All Access",
            "Order (Finance - Industrial)",
            "General Order Creator",
            "CATALOG_VIEWER",
            "Order Discount Editor",
            "Vendor View",
            "Ghalib Admin",
            "Dropship Fulfilment-Ops",
            "WMS Super User",
            "Chief Justice - Order",
            "Cash Tower - Collection Supervisor",
            "CATALOG_MASTER",
            "Promo View",
            "catalog pricing viewer",
            "Customer Campaign Master",
            "Order Manager",
            "Vendor Create",
            "BA Executive",
            "WMS COMMERCIALS",
            "Discount Approval Manager",
            "Order All Access",
            "INVOICE_CONTROLLER",
            "CATALOG_OPS",
            "Partner Manager",
            "Order (Commercial - Industrial)",
            "Discount Order Creator",
            "WMS Finance",
            "Vendor Management (FINANCE)",
            "PRIME_KPO",
            "catalog pricing",
            "Order (Operations - Industrial)",
            "Cycle Count View Only",
            "Nucleus Order View",
            "Retail - Customer Update",
            "BD Industrial",
            "Bundle Create",
            "Cycle Count Initiation",
            "IRD executive",
            "IRM",
            "Lending Collection Core",
            "Lending Army Chief",
            "Lending Biz Core",
            "PO COMMERCIALS",
            "PO_COMMERCIALS_SUPERVISOR",
            "PO FINANCE",
            "BR Executive",
            "Route Viewer",
            "Route Planner",
            "Cycle Count Master",
            "WMS OPS Supervisor",
            "WMS OPS",
            "WMS Packer",
            "Customer Module - View",
            "Customer Module - Update",
            "Route Viewer - Routing Executive",
            "Route Planner - Routing Supervisor",
            "Sales Return",
            "Sales Return Approver",
            "Demand Quotation",
            "Cash Tower Cash Supervisor"
          ]
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__nucleus_access_request_4",
      "label": "Nucleus Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10097",
          "label": "Nucleus Module",
          "type": "select",
          "required": true,
          "options": [
            "Fleet Manager",
            "Fleet Supervisor",
            "Fleet Executive",
            "Ticket Resolver",
            "Prime Admin",
            "Promo Manager",
            "CAMPAIGN_MASTER",
            "Agent Team Lead",
            "Cash Tower Cash Officer",
            "Live Ops Care",
            "Nucleus Liveops Executive",
            "Customer All Access",
            "PO_FINANCE_SUPERVISOR",
            "Commercials Manager",
            "INVOICE_RESOLVER",
            "Catalog View And Create Product",
            "Commercials Brand Manager",
            "catalog pricing supervisor",
            "INVOICE_FINANCE",
            "Vedor Management (FINANCE)",
            "CATALOG_COMMERCIAL",
            "CATALOG_FINANCE",
            "Catalog Other Details",
            "Catalog All Access",
            "Order (Finance - Industrial)",
            "General Order Creator",
            "CATALOG_VIEWER",
            "Order Discount Editor",
            "Vendor View",
            "Ghalib Admin",
            "Dropship Fulfilment-Ops",
            "WMS Super User",
            "Chief Justice - Order",
            "Cash Tower - Collection Supervisor",
            "CATALOG_MASTER",
            "Promo View",
            "catalog pricing viewer",
            "Customer Campaign Master",
            "Order Manager",
            "Vendor Create",
            "BA Executive",
            "WMS COMMERCIALS",
            "Discount Approval Manager",
            "Order All Access",
            "INVOICE_CONTROLLER",
            "CATALOG_OPS",
            "Partner Manager",
            "Order (Commercial - Industrial)",
            "Discount Order Creator",
            "WMS Finance",
            "Vendor Management (FINANCE)",
            "PRIME_KPO",
            "catalog pricing",
            "Order (Operations - Industrial)",
            "Cycle Count View Only",
            "Nucleus Order View",
            "Retail - Customer Update",
            "BD Industrial",
            "Bundle Create",
            "Cycle Count Initiation",
            "IRD executive",
            "IRM",
            "Lending Collection Core",
            "Lending Army Chief",
            "Lending Biz Core",
            "PO COMMERCIALS",
            "PO_COMMERCIALS_SUPERVISOR",
            "PO FINANCE",
            "BR Executive",
            "Route Viewer",
            "Route Planner",
            "Cycle Count Master",
            "WMS OPS Supervisor",
            "WMS OPS",
            "WMS Packer",
            "Customer Module - View",
            "Customer Module - Update",
            "Route Viewer - Routing Executive",
            "Route Planner - Routing Supervisor",
            "Sales Return",
            "Sales Return Approver",
            "Demand Quotation",
            "Cash Tower Cash Supervisor"
          ]
        },
        {
          "key": "customfield_10096",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Fulfilment",
            "Last Mile",
            "Ops Planning and Performance"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__nucleus_access_request_5",
      "label": "Nucleus Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10097",
          "label": "Nucleus Module",
          "type": "select",
          "required": true,
          "options": [
            "Fleet Manager",
            "Fleet Supervisor",
            "Fleet Executive",
            "Ticket Resolver",
            "Prime Admin",
            "Promo Manager",
            "CAMPAIGN_MASTER",
            "Agent Team Lead",
            "Cash Tower Cash Officer",
            "Live Ops Care",
            "Nucleus Liveops Executive",
            "Customer All Access",
            "PO_FINANCE_SUPERVISOR",
            "Commercials Manager",
            "INVOICE_RESOLVER",
            "Catalog View And Create Product",
            "Commercials Brand Manager",
            "catalog pricing supervisor",
            "INVOICE_FINANCE",
            "Vedor Management (FINANCE)",
            "CATALOG_COMMERCIAL",
            "CATALOG_FINANCE",
            "Catalog Other Details",
            "Catalog All Access",
            "Order (Finance - Industrial)",
            "General Order Creator",
            "CATALOG_VIEWER",
            "Order Discount Editor",
            "Vendor View",
            "Ghalib Admin",
            "Dropship Fulfilment-Ops",
            "WMS Super User",
            "Chief Justice - Order",
            "Cash Tower - Collection Supervisor",
            "CATALOG_MASTER",
            "Promo View",
            "catalog pricing viewer",
            "Customer Campaign Master",
            "Order Manager",
            "Vendor Create",
            "BA Executive",
            "WMS COMMERCIALS",
            "Discount Approval Manager",
            "Order All Access",
            "INVOICE_CONTROLLER",
            "CATALOG_OPS",
            "Partner Manager",
            "Order (Commercial - Industrial)",
            "Discount Order Creator",
            "WMS Finance",
            "Vendor Management (FINANCE)",
            "PRIME_KPO",
            "catalog pricing",
            "Order (Operations - Industrial)",
            "Cycle Count View Only",
            "Nucleus Order View",
            "Retail - Customer Update",
            "BD Industrial",
            "Bundle Create",
            "Cycle Count Initiation",
            "IRD executive",
            "IRM",
            "Lending Collection Core",
            "Lending Army Chief",
            "Lending Biz Core",
            "PO COMMERCIALS",
            "PO_COMMERCIALS_SUPERVISOR",
            "PO FINANCE",
            "BR Executive",
            "Route Viewer",
            "Route Planner",
            "Cycle Count Master",
            "WMS OPS Supervisor",
            "WMS OPS",
            "WMS Packer",
            "Customer Module - View",
            "Customer Module - Update",
            "Route Viewer - Routing Executive",
            "Route Planner - Routing Supervisor",
            "Sales Return",
            "Sales Return Approver",
            "Demand Quotation",
            "Cash Tower Cash Supervisor"
          ]
        },
        {
          "key": "customfield_10093",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Commercials",
            "Marketplace",
            "New Verticals",
            "Performance and Planning",
            "Retail Ops"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true,
          "hint": "Format: 032112345678"
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ],
          "hint": "For multiple location please please mention in requirement box"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__nucleus_access_request_6",
      "label": "Nucleus Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10097",
          "label": "Nucleus Module",
          "type": "select",
          "required": true,
          "options": [
            "Fleet Manager",
            "Fleet Supervisor",
            "Fleet Executive",
            "Ticket Resolver",
            "Prime Admin",
            "Promo Manager",
            "CAMPAIGN_MASTER",
            "Agent Team Lead",
            "Cash Tower Cash Officer",
            "Live Ops Care",
            "Nucleus Liveops Executive",
            "Customer All Access",
            "PO_FINANCE_SUPERVISOR",
            "Commercials Manager",
            "INVOICE_RESOLVER",
            "Catalog View And Create Product",
            "Commercials Brand Manager",
            "catalog pricing supervisor",
            "INVOICE_FINANCE",
            "Vedor Management (FINANCE)",
            "CATALOG_COMMERCIAL",
            "CATALOG_FINANCE",
            "Catalog Other Details",
            "Catalog All Access",
            "Order (Finance - Industrial)",
            "General Order Creator",
            "CATALOG_VIEWER",
            "Order Discount Editor",
            "Vendor View",
            "Ghalib Admin",
            "Dropship Fulfilment-Ops",
            "WMS Super User",
            "Chief Justice - Order",
            "Cash Tower - Collection Supervisor",
            "CATALOG_MASTER",
            "Promo View",
            "catalog pricing viewer",
            "Customer Campaign Master",
            "Order Manager",
            "Vendor Create",
            "BA Executive",
            "WMS COMMERCIALS",
            "Discount Approval Manager",
            "Order All Access",
            "INVOICE_CONTROLLER",
            "CATALOG_OPS",
            "Partner Manager",
            "Order (Commercial - Industrial)",
            "Discount Order Creator",
            "WMS Finance",
            "Vendor Management (FINANCE)",
            "PRIME_KPO",
            "catalog pricing",
            "Order (Operations - Industrial)",
            "Cycle Count View Only",
            "Nucleus Order View",
            "Retail - Customer Update",
            "BD Industrial",
            "Bundle Create",
            "Cycle Count Initiation",
            "IRD executive",
            "IRM",
            "Lending Collection Core",
            "Lending Army Chief",
            "Lending Biz Core",
            "PO COMMERCIALS",
            "PO_COMMERCIALS_SUPERVISOR",
            "PO FINANCE",
            "BR Executive",
            "Route Viewer",
            "Route Planner",
            "Cycle Count Master",
            "WMS OPS Supervisor",
            "WMS OPS",
            "WMS Packer",
            "Customer Module - View",
            "Customer Module - Update",
            "Route Viewer - Routing Executive",
            "Route Planner - Routing Supervisor",
            "Sales Return",
            "Sales Return Approver",
            "Demand Quotation",
            "Cash Tower Cash Supervisor"
          ]
        },
        {
          "key": "customfield_10077",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Brand",
            "Industrial",
            "New Verticals",
            "People",
            "Safety & Security",
            "Care"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__onboard_new_employees",
      "label": "Onboard new employees",
      "description": "Request access for new employees.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true,
          "hint": "e.g. Joseph Wilson starts on September 1"
        },
        {
          "key": "duedate",
          "label": "Employee start date",
          "type": "date",
          "required": false,
          "hint": "If you are not sure of the exact date, put in a tentative one."
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__onboarding_offboarding",
      "label": "Onboarding/Offboarding",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10110",
          "label": "Ticket Type",
          "type": "select",
          "required": true,
          "options": [
            "Onboarding",
            "Offboarding"
          ]
        },
        {
          "key": "customfield_10111",
          "label": "Colleague Type",
          "type": "select",
          "required": true,
          "options": [
            "Permanent",
            "Contractual"
          ]
        },
        {
          "key": "customfield_10112",
          "label": "Full Name",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10113",
          "label": "Preferred Email ID",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10114",
          "label": "Personal Email ID",
          "type": "email",
          "required": true
        },
        {
          "key": "customfield_10100",
          "label": "Function",
          "type": "select",
          "required": true,
          "options": [
            "Biz",
            "Finance",
            "Operation",
            "Other",
            "Tech"
          ]
        },
        {
          "key": "customfield_10089",
          "label": "Location",
          "type": "select",
          "required": true,
          "options": [
            "Bahawalpur",
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Hafizabad",
            "Sukkur",
            "Lodhran",
            "Dunyapur"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10108",
          "label": "Start/End Date",
          "type": "date",
          "required": true
        }
      ]
    },
    {
      "type": "it_service_desk__platform_access",
      "label": "Platform Access",
      "description": "This request of for Commando, LiveOps and Nucleus",
      "group": null,
      "fields": [
        {
          "key": "customfield_10076",
          "label": "Platform Required",
          "type": "select",
          "required": true,
          "options": [
            "Agent App -  Agent Team Lead",
            "Commando -  Brand Manager",
            "Commando -  Commando God",
            "Commando -  Commercials",
            "Commando -  Finance",
            "Commando -  Gro-mance",
            "Commando -  Growth King",
            "Commando -  Marketplace Manager",
            "Commando -  Munshi",
            "Commando -  Ops",
            "Commando -  Ops Supervisor",
            "Commando -  Telesales",
            "Commando -  The Right-hand",
            "LiveOps -  Live Ops Care",
            "LiveOps -  Live Ops Cash Officer",
            "LiveOps -  LiveOps Default",
            "LiveOps -  Supervisor Cash Officer",
            "Nucleus -  BR Executive",
            "Nucleus -  Cash Tower Cash Officer",
            "Nucleus -  Cash Tower Cash Supervisor",
            "Nucleus -  Fleet Executive",
            "Nucleus -  Fleet Supervisor",
            "Nucleus -  LAST_MILE_EXECUTIVE",
            "Nucleus -  PO COMMERCIALS",
            "Nucleus -  PO FINANCE",
            "Nucleus -  PO_COMMERCIALS_SUPERVISOR",
            "Nucleus -  WMS OPS",
            "Nucleus -  WMS OPS Supervisor",
            "Nucleus - BA Executive"
          ]
        },
        {
          "key": "customfield_10077",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Brand",
            "Industrial",
            "New Verticals",
            "People",
            "Safety & Security",
            "Care"
          ]
        },
        {
          "key": "customfield_10078",
          "label": "Mobile Number",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__report_a_system_problem_2",
      "label": "Report a system problem",
      "description": "Let us know if something isn't working properly and we'll aim to get it back up and running quickly.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summarize the problem",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Describe what happened and how it occurred",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10058",
          "label": "Affected services",
          "type": "text",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        },
        {
          "key": "customfield_10051",
          "label": "How urgently does this need to be fixed?",
          "type": "select",
          "required": false,
          "options": [
            "Critical",
            "High",
            "Medium",
            "Low"
          ]
        },
        {
          "key": "customfield_10052",
          "label": "How big of an impact is the problem to you or the organization?",
          "type": "select",
          "required": false,
          "options": [
            "Extensive / Widespread",
            "Significant / Large",
            "Moderate / Limited",
            "Minor / Localized"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__report_broken_hardware",
      "label": "Report broken hardware",
      "description": "Report hardware that might be faulty or broken e.g. a broken computer screen or a damaged server.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summarize the problem",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Describe what happened and how it occurred",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10057",
          "label": "Affected hardware",
          "type": "text",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        },
        {
          "key": "customfield_10051",
          "label": "How urgently does this need to be fixed?",
          "type": "select",
          "required": false,
          "options": [
            "Critical",
            "High",
            "Medium",
            "Low"
          ]
        },
        {
          "key": "customfield_10052",
          "label": "How big of an impact is the problem to you or the organization?",
          "type": "select",
          "required": false,
          "options": [
            "Extensive / Widespread",
            "Significant / Large",
            "Moderate / Limited",
            "Minor / Localized"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__request_a_new_account",
      "label": "Request a new account",
      "description": "Request a new account for a system.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true,
          "hint": "e.g. Create an account on Jira"
        },
        {
          "key": "components",
          "label": "Select a system",
          "type": "multiselect",
          "required": true,
          "options": [
            "Active Directory",
            "Analytics and Reporting Service",
            "Billing Services",
            "Cloud Storage Services",
            "Data Center Services",
            "Email and Collaboration Services",
            "Financial Services",
            "HR Services",
            "Intranet",
            "Jira",
            "Office Network",
            "Payroll Services",
            "Printers",
            "Public Website",
            "VPN Server",
            "Webstore Purchasing Services"
          ]
        },
        {
          "key": "description",
          "label": "Tell us why you need an account",
          "type": "text",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__request_a_procurement",
      "label": "Request a Procurement",
      "description": "Request for new Procurement",
      "group": null,
      "fields": [
        {
          "key": "customfield_10086",
          "label": "Product name to be procured",
          "type": "select",
          "required": true,
          "options": [
            "Mouse",
            "Desktop",
            "Laptops",
            "Dongle",
            "Keyboard",
            "Headset"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__request_admin_access",
      "label": "Request admin access",
      "description": "For example, if you need to administer Jira.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false,
          "hint": "Tell us why you need this permission"
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__request_new_hardware",
      "label": "Request new hardware",
      "description": "For example, a new mouse or monitor.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Why do you need this?",
          "type": "text",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__request_new_software",
      "label": "Request new software",
      "description": "If you need a software license, raise a request here.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summarize the request",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Why do you need this?",
          "type": "text",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__set_up_vpn_to_the_office",
      "label": "Set up VPN to the office",
      "description": "Want to access work stuff from outside? Let us know.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__superset_access_request_2",
      "label": "SuperSet Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10096",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Fulfilment",
            "Last Mile",
            "Ops Planning and Performance"
          ]
        },
        {
          "key": "customfield_10079",
          "label": "Burraq Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Care",
            "CSV",
            "Engineering",
            "Finance",
            "Finance Executives",
            "Fintech performance",
            "Growth Performance",
            "Marketplace",
            "Marketplace Core",
            "Operation performance",
            "Industrial"
          ],
          "hint": "h5. Please follow the [burraq access sheet | https://docs.google.com/spreadsheets/d/1gMFwDuBHvgmYHPiYcjYwRNsHgormwAsxjyGgx0NDQ/edit?usp=sharing] for access request:"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__superset_access_request_3",
      "label": "SuperSet Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10079",
          "label": "Burraq Access Module (Role)",
          "type": "select",
          "required": false,
          "options": [
            "Care",
            "CSV",
            "Engineering",
            "Finance",
            "Finance Executives",
            "Fintech performance",
            "Growth Performance",
            "Marketplace",
            "Marketplace Core",
            "Operation performance",
            "Industrial"
          ]
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": false,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "it_service_desk__superset_access_request_4",
      "label": "SuperSet Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10093",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Commercials",
            "Marketplace",
            "New Verticals",
            "Performance and Planning",
            "Retail Ops"
          ]
        },
        {
          "key": "customfield_10079",
          "label": "Burraq Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Care",
            "CSV",
            "Engineering",
            "Finance",
            "Finance Executives",
            "Fintech performance",
            "Growth Performance",
            "Marketplace",
            "Marketplace Core",
            "Operation performance",
            "Industrial"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__superset_access_request_5",
      "label": "SuperSet Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10095",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Administration",
            "Finance",
            "Fintech",
            "Legal",
            "Strategy"
          ]
        },
        {
          "key": "customfield_10079",
          "label": "Burraq Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Care",
            "CSV",
            "Engineering",
            "Finance",
            "Finance Executives",
            "Fintech performance",
            "Growth Performance",
            "Marketplace",
            "Marketplace Core",
            "Operation performance",
            "Industrial"
          ],
          "hint": "h5. Please follow the [burraq access sheet | https://docs.google.com/spreadsheets/d/1gMFwDuBHvgmYHPiYcjYwRNsHgormwAsxjyGgx0NDQ/edit?usp=sharing] for access request:"
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__superset_access_request_6",
      "label": "SuperSet Access Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10077",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Brand",
            "Industrial",
            "New Verticals",
            "People",
            "Safety & Security",
            "Care"
          ]
        },
        {
          "key": "customfield_10079",
          "label": "Burraq Access Module (Role)",
          "type": "select",
          "required": true,
          "options": [
            "Care",
            "CSV",
            "Engineering",
            "Finance",
            "Finance Executives",
            "Fintech performance",
            "Growth Performance",
            "Marketplace",
            "Marketplace Core",
            "Operation performance",
            "Industrial"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    },
    {
      "type": "it_service_desk__warehouse_staff_request",
      "label": "Warehouse Staff Request",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10098",
          "label": "Warehouse Access",
          "type": "select",
          "required": true,
          "options": [
            "Pick",
            "Stack",
            "Load",
            "QC",
            "Return",
            "Inbound",
            "Transfer"
          ]
        },
        {
          "key": "customfield_10080",
          "label": "Justification (Requirement)",
          "type": "textarea",
          "required": false
        },
        {
          "key": "customfield_10094",
          "label": "Departments",
          "type": "select",
          "required": true,
          "options": [
            "Design",
            "Easy Khata",
            "Engineering",
            "IT",
            "Data",
            "Platform",
            "Product"
          ]
        }
      ]
    }
  ],
  "people_help_desk_contractual": [
    {
      "type": "people_help_desk_contractual__behavioural_issue",
      "label": "Behavioural Issue",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__cash_snatching",
      "label": "Cash Snatching",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__claims_shortages_issue",
      "label": "Claims & Shortages Issue",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__eating_splitting_pan_gutka",
      "label": "Eating & Splitting (Pan, Gutka)",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__flowhcm_issue",
      "label": "FlowHCM Issue",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        },
        {
          "key": "customfield_10206",
          "label": "Assigned to",
          "type": "text",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__fnf_settlement",
      "label": "FNF Settlement",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__fraudulent_activity",
      "label": "Fraudulent Activity",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__health_life_insurance",
      "label": "Health & Life Insurance",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__hiring_new_position",
      "label": "Hiring (New Position)",
      "description": "",
      "group": "Hiring Requisition",
      "fields": [
        {
          "key": "customfield_10258",
          "label": "Reason for hiring",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10272",
          "label": "Division - Department",
          "type": "select",
          "required": false,
          "options": [
            "Customer Experience",
            "Corporate",
            "Industrial",
            "Operations",
            "Retail",
            "IT"
          ]
        },
        {
          "key": "customfield_10271",
          "label": "SubDepartment",
          "type": "select",
          "required": false,
          "options": [
            "Admin",
            "Bazaar Pro",
            "Care",
            "Commercial",
            "Fin Tech",
            "Finance",
            "Fulfillment",
            "GTM",
            "Industrial",
            "IT",
            "Last Mile",
            "Market Place",
            "People",
            "Prime",
            "Private Label",
            "Procurement",
            "Security",
            "Workplace Services"
          ]
        },
        {
          "key": "customfield_10259",
          "label": "Gender",
          "type": "radio",
          "required": true,
          "options": [
            "Male",
            "Female"
          ]
        },
        {
          "key": "customfield_10260",
          "label": "No. of Position",
          "type": "select",
          "required": true,
          "options": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            ">20"
          ]
        },
        {
          "key": "customfield_10261",
          "label": "Work Shift",
          "type": "text",
          "required": true,
          "hint": "(Eg: 10am-7pm) (Please mention complete time in and out)"
        },
        {
          "key": "customfield_10262",
          "label": "Monthly Day Off",
          "type": "text",
          "required": true,
          "hint": "(Eg: Sunday Off) (Please mention complete day off)"
        },
        {
          "key": "customfield_10263",
          "label": "Manager Tagging (for flowHCM)",
          "type": "text",
          "required": true,
          "hint": "(Manager Name & Employee Code Example: Muzzammil, 10002457)(Please mention complete name of line manager and flowhcm ID)"
        },
        {
          "key": "customfield_10135",
          "label": "Work Experience",
          "type": "select",
          "required": true,
          "options": [
            "0.5",
            "1",
            "1.5",
            "2",
            "2.5",
            "3",
            "3.5",
            "4",
            "4.5",
            "5",
            "5.5",
            "6",
            "6.5",
            "7",
            "7.5",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16"
          ],
          "hint": "Work Experience in Years"
        },
        {
          "key": "customfield_10264",
          "label": "Job Description/Skills",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10254",
          "label": "Bands Scale",
          "type": "radio",
          "required": true,
          "options": [
            "Champion",
            "Shaheen",
            "Assistant",
            "Team Lead",
            "Executive",
            "Assistant Manager/Manager",
            "Customer Development Specialist - CDS"
          ]
        },
        {
          "key": "customfield_10255",
          "label": "Fuel Requirement",
          "type": "radio",
          "required": true,
          "options": [
            "Fixed Fuel Allowance",
            "Variable Fuel Allowance",
            "Not Applicable"
          ]
        },
        {
          "key": "customfield_10233",
          "label": "Employee Designation",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10566",
          "label": "Group",
          "type": "radio",
          "required": false,
          "options": [
            "A (Non Incentive)",
            "B (Incentive)"
          ]
        },
        {
          "key": "customfield_10167",
          "label": "Facility",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10256",
          "label": "Education",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10160",
          "label": "IT Essentials",
          "type": "multiselect",
          "required": true,
          "options": [
            "Laptop",
            "Slack",
            "Gmail ID",
            "Commando ID",
            "Nucleus ID",
            "SIM",
            "Not Applicable"
          ]
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__hiring_replacement",
      "label": "Hiring (Replacement)",
      "description": "",
      "group": "Hiring Requisition",
      "fields": [
        {
          "key": "customfield_10265",
          "label": "Leaving Date of leaver",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10272",
          "label": "Division - Department",
          "type": "select",
          "required": false,
          "options": [
            "Customer Experience",
            "Corporate",
            "Industrial",
            "Operations",
            "Retail",
            "IT"
          ]
        },
        {
          "key": "customfield_10271",
          "label": "SubDepartment",
          "type": "select",
          "required": false,
          "options": [
            "Admin",
            "Bazaar Pro",
            "Care",
            "Commercial",
            "Fin Tech",
            "Finance",
            "Fulfillment",
            "GTM",
            "Industrial",
            "IT",
            "Last Mile",
            "Market Place",
            "People",
            "Prime",
            "Private Label",
            "Procurement",
            "Security",
            "Workplace Services"
          ]
        },
        {
          "key": "customfield_10259",
          "label": "Gender",
          "type": "radio",
          "required": true,
          "options": [
            "Male",
            "Female"
          ]
        },
        {
          "key": "customfield_10261",
          "label": "Work Shift",
          "type": "text",
          "required": true,
          "hint": "(Eg: 10am-7pm) (Please mention complete time in and out)"
        },
        {
          "key": "customfield_10262",
          "label": "Monthly Day Off",
          "type": "text",
          "required": true,
          "hint": "(Eg: Sunday Off) (Please mention complete day off)"
        },
        {
          "key": "customfield_10263",
          "label": "Manager Tagging (for flowHCM)",
          "type": "text",
          "required": true,
          "hint": "(Manager Name & Employee Code Example: Muzzammil, 10002457)(Please mention complete name of line manager and flowhcm ID)"
        },
        {
          "key": "customfield_10135",
          "label": "Work Experience",
          "type": "select",
          "required": true,
          "options": [
            "0.5",
            "1",
            "1.5",
            "2",
            "2.5",
            "3",
            "3.5",
            "4",
            "4.5",
            "5",
            "5.5",
            "6",
            "6.5",
            "7",
            "7.5",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16"
          ],
          "hint": "Work Experience in Years"
        },
        {
          "key": "customfield_10264",
          "label": "Job Description/Skills",
          "type": "textarea",
          "required": true
        },
        {
          "key": "customfield_10254",
          "label": "Bands Scale",
          "type": "radio",
          "required": true,
          "options": [
            "Champion",
            "Shaheen",
            "Assistant",
            "Team Lead",
            "Executive",
            "Assistant Manager/Manager",
            "Customer Development Specialist - CDS"
          ]
        },
        {
          "key": "customfield_10255",
          "label": "Fuel Requirement",
          "type": "radio",
          "required": true,
          "options": [
            "Fixed Fuel Allowance",
            "Variable Fuel Allowance",
            "Not Applicable"
          ]
        },
        {
          "key": "customfield_10233",
          "label": "Employee Designation",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10566",
          "label": "Group",
          "type": "radio",
          "required": false,
          "options": [
            "A (Non Incentive)",
            "B (Incentive)"
          ]
        },
        {
          "key": "customfield_10167",
          "label": "Facility",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10256",
          "label": "Education",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10160",
          "label": "IT Essentials",
          "type": "multiselect",
          "required": true,
          "options": [
            "Laptop",
            "Slack",
            "Gmail ID",
            "Commando ID",
            "Nucleus ID",
            "SIM",
            "Not Applicable"
          ]
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__hold_payroll_incentive",
      "label": "Hold Payroll/Incentive",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__incentive_allowance",
      "label": "Incentive/Allowance",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__inventory_snatching",
      "label": "Inventory Snatching",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__it_assets_sim_request",
      "label": "IT Assets/SIM Request",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__negligence_in_work",
      "label": "Negligence In Work",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__offboarding",
      "label": "Offboarding",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__opd_claim",
      "label": "OPD Claim",
      "description": "",
      "group": "Reimbursement",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10252",
          "label": "Claim Amount",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": true
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__optimization",
      "label": "Optimization",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__other_in_case_none_of_above",
      "label": "Other (In case none of above)",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__payroll",
      "label": "Payroll",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__performance_improvement_plan_pip",
      "label": "Performance Improvement Plan (PIP)",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__punctuality_issue",
      "label": "Punctuality Issue",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__release_payroll_incentive",
      "label": "Release Payroll/Incentive",
      "description": "",
      "group": "Issue Resolution",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__special_project_only_for_people_team",
      "label": "Special Project (Only for People Team)",
      "description": "",
      "group": "Special Project (Only for People Team)",
      "fields": [
        {
          "key": "customfield_10251",
          "label": "Project Name",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10124",
          "label": "Start date",
          "type": "date",
          "required": false
        },
        {
          "key": "customfield_10108",
          "label": "End Date",
          "type": "date",
          "required": false
        },
        {
          "key": "customfield_10206",
          "label": "Assigned to",
          "type": "text",
          "required": false
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__tada_claim",
      "label": "TADA Claim",
      "description": "",
      "group": "Reimbursement",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10252",
          "label": "Claim Amount",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": true
        },
        {
          "key": "customfield_10172",
          "label": "Description",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__uninformed_absenteeism",
      "label": "Uninformed Absenteeism",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__unsatisfactory_performance",
      "label": "Unsatisfactory Performance",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__violation_of_sops",
      "label": "Violation of SOPs",
      "description": "",
      "group": "Disciplinary Action",
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__advance_salary",
      "label": "Advance Salary",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__advisory",
      "label": "Advisory",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__counselling",
      "label": "Counselling",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__emailed_request",
      "label": "Emailed request",
      "description": "Request received from your email support channel.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Subject",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Body",
          "type": "text",
          "required": false
        }
      ]
    },
    {
      "type": "people_help_desk_contractual__loan",
      "label": "Loan",
      "description": "",
      "group": null,
      "fields": [
        {
          "key": "customfield_10158",
          "label": "Employee ID",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    }
  ],
  "platform_engineering": [
    {
      "type": "platform_engineering__aws_or_k8s_resource_creation_updation_requests",
      "label": "AWS or K8s Resource Creation, Updation Requests",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10179",
          "label": "Request raised for",
          "type": "text",
          "required": true,
          "options": [
            "Creation of new resource",
            "Updation in existing resource"
          ]
        },
        {
          "key": "customfield_10178",
          "label": "Resource Name",
          "type": "text",
          "required": true,
          "hint": "for eg. ec2, dms, rds, s3 bucket, s3 object, security group, secret manager, service account etc."
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "platform_engineering__incident",
      "label": "Incident",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "customfield_10172",
          "label": "Description",
          "type": "textarea",
          "required": true,
          "hint": "add necessary details and steps taken to resolve"
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "platform_engineering__internal_tools_access",
      "label": "Internal Tools Access",
      "description": "Request for accesses of Teleport, AWS SSO",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10176",
          "label": "Request for:",
          "type": "multiselect",
          "required": true,
          "options": [
            "Reset Password",
            "Reset OTP",
            "New Accesses"
          ]
        },
        {
          "key": "customfield_10175",
          "label": "Platform Tools",
          "type": "multiselect",
          "required": true,
          "options": [
            "Teleport",
            "AWS SSO"
          ],
          "hint": "Use Google Authenticator App for MFA / QR. For Keycloak/Bazaar SSO access contact IT team."
        }
      ]
    },
    {
      "type": "platform_engineering__pr_code_review_requests",
      "label": "PR / Code Review Requests",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true,
          "hint": "Add Link or URL of pull request"
        }
      ]
    },
    {
      "type": "platform_engineering__raise_a_request",
      "label": "Raise a request",
      "description": "Submit a request or report a problem.",
      "group": "General",
      "fields": [
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "platform_engineering__service_onboarding",
      "label": "Service Onboarding",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10177",
          "label": "Select from below",
          "type": "select",
          "required": false,
          "options": [
            "Canary onboarding on ArgoCD",
            "Migration on Devx account and Canary onboarding",
            "MSK onboarding",
            "Frontend service onboarding"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false,
          "hint": "Add github's PR link or any additional details"
        }
      ]
    },
    {
      "type": "platform_engineering__troubleshoot_resolve_issue",
      "label": "Troubleshoot / Resolve Issue",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10181",
          "label": "Problem Type",
          "type": "select",
          "required": true,
          "options": [
            "MSK Issue",
            "Backend service issue",
            "Frontend service issue",
            "Grafana Logs/Metrics",
            "Accessing portal/tool"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false,
          "hint": "Add screenshots of error messages"
        }
      ]
    },
    {
      "type": "platform_engineering__ask_a_question",
      "label": "Ask a question",
      "description": "Have a question? Submit it here.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "What is your question or general request?",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        }
      ]
    },
    {
      "type": "platform_engineering__emailed_request",
      "label": "Emailed request",
      "description": "Request received from your email support channel.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Subject",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Body",
          "type": "text",
          "required": false
        }
      ]
    }
  ],
  "travel_desk": [
    {
      "type": "travel_desk__travel_request",
      "label": "Travel Request",
      "description": "",
      "group": "General",
      "fields": [
        {
          "key": "customfield_10117",
          "label": "Origin City",
          "type": "select",
          "required": true,
          "options": [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Faisalabad",
            "Multan",
            "Hyderabad",
            "Gujranwala",
            "Peshawar"
          ]
        },
        {
          "key": "customfield_10115",
          "label": "Departure Date",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10118",
          "label": "1st Destination City",
          "type": "select",
          "required": true,
          "options": [
            "Faisalabad",
            "Gujranwala",
            "Hyderabad",
            "Islamabad",
            "Karachi",
            "Lahore",
            "Multan",
            "Peshawar",
            "Sukkur"
          ]
        },
        {
          "key": "customfield_10116",
          "label": "Return Date",
          "type": "date",
          "required": true
        },
        {
          "key": "customfield_10123",
          "label": "Transport Required",
          "type": "multiselect",
          "required": true,
          "options": [
            "InterCity Bus",
            "Careem Cooperate",
            "Car"
          ]
        },
        {
          "key": "customfield_10122",
          "label": "Department",
          "type": "select",
          "required": true,
          "options": [
            "Analytics",
            "Brand",
            "Customer Experience",
            "Engineering",
            "Finance",
            "Industrial",
            "IT",
            "Operations",
            "People & Workplace Services",
            "Procurement",
            "Product",
            "Retail",
            "Strategy",
            "PRO"
          ]
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "type": "travel_desk__emailed_request",
      "label": "Emailed request",
      "description": "Request received from your email support channel.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Subject",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Body",
          "type": "text",
          "required": false
        }
      ]
    },
    {
      "type": "travel_desk__licensing_and_billing_questions",
      "label": "Licensing and billing questions",
      "description": "Choose this if you have questions about licensing or billing.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "travel_desk__other_questions",
      "label": "Other questions",
      "description": "Don't see what you're looking for? Select this option and we'll help you out.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "travel_desk__product_trial_questions",
      "label": "Product trial questions",
      "description": "Trying out our product and want more information? Select this and we'll be happy to answer your questions.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "travel_desk__report_a_bug",
      "label": "Report a bug",
      "description": "Tell us the problems you're experiencing.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true,
          "hint": "Summarize the bug briefly."
        },
        {
          "key": "description",
          "label": "Symptom",
          "type": "text",
          "required": true,
          "hint": "Please provide details of the problems you are having."
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "travel_desk__suggest_a_new_feature",
      "label": "Suggest a new feature",
      "description": "Let us know your idea for a new feature.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "travel_desk__suggest_improvement",
      "label": "Suggest improvement",
      "description": "See a place where we can do better? We're all ears.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": false
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    },
    {
      "type": "travel_desk__technical_support",
      "label": "Technical support",
      "description": "Need help installing, configuring, or troubleshooting? Select this to request assistance.",
      "group": null,
      "fields": [
        {
          "key": "summary",
          "label": "Summary",
          "type": "text",
          "required": true
        },
        {
          "key": "description",
          "label": "Description",
          "type": "textarea",
          "required": true
        },
        {
          "key": "components",
          "label": "Components or products",
          "type": "multiselect",
          "required": false,
          "options": [
            "Jira",
            "Public website"
          ]
        },
        {
          "key": "attachment",
          "label": "Attachment",
          "type": "file",
          "required": false
        }
      ]
    }
  ]
};
