/** Built-in sample documents so anyone can try Jelas in one click. */

export interface SampleDocument {
  id: string;
  title: string;
  text: string;
}

export const samples: SampleDocument[] = [
  {
    id: "medicine",
    title: "Medicine label",
    text: `AMOXICILLIN 500 mg CAPSULES — Rx only.
Take one (1) capsule by mouth every eight (8) hours for ten (10) days, until all medication is finished, even if symptoms resolve earlier. Do not skip doses. If a dose is missed, take it as soon as remembered unless it is almost time for the next dose; never double up. May be taken with food to reduce gastrointestinal upset. Store at controlled room temperature 20–25 °C (68–77 °F), away from moisture. Contraindicated in patients with a history of hypersensitivity to penicillin. Discontinue and seek immediate medical attention in the event of rash, swelling of the lips or tongue, or difficulty breathing. Avoid alcohol consumption during treatment. Keep out of reach of children.`,
  },
  {
    id: "school",
    title: "School letter",
    text: `Dear Parent/Guardian,
We are writing to inform you that the Year 6 residential trip to Camp Wattle will take place from Monday 14 December to Friday 18 December 2026. The total cost per pupil is $185, payable in full no later than Friday 27 November 2026 via the school office or the parent portal. A non-refundable deposit of $50 was due on 30 October; if you have not yet paid the deposit, please contact the office immediately as places cannot be guaranteed after 20 November. Pupils must bring a signed medical consent form and an up-to-date list of any medication, which will be administered by designated staff in accordance with the school's Medication Administration Policy. Financial assistance is available for families experiencing hardship; applications are confidential and must be submitted by 20 November 2026.`,
  },
  {
    id: "bank",
    title: "Bank notice",
    text: `IMPORTANT NOTICE — CHANGES TO YOUR ACCOUNT TERMS AND CONDITIONS.
Effective 1 January 2027, the monthly account maintenance fee for Everyday Transaction Accounts will increase from $4.00 to $6.50, debited on the last business day of each month. The fee will be waived for any month in which deposits totalling $2,000 or more are credited to the account before the final business day, excluding transfers between your own accounts. Additionally, the interest rate applicable to balances below $5,000 will decrease by 0.25% p.a. If you do not agree to these changes, you may close your account without charge before 31 December 2026; continued use of the account after the effective date constitutes acceptance of the revised terms. For disputes, contact our complaints team within 30 days of the relevant statement date.`,
  },
];
