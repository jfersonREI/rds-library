// dashboard-data.ts
export type Data = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

// Function to generate a random ID
function generateId(index: number): string {
  // A simple way to create unique-ish IDs for this example
  return `entry-${String(index + 1).padStart(3, '0')}`;
}

// Function to generate a random email
function generateEmail(index: number): string {
  return `user${index + 1}@example.com`;
}

// Function to get a random status
// Added 'as const' to ensure literal type inference for array elements
const statuses = ['pending', 'processing', 'success', 'failed'] as const;
function generateStatus(
  index: number
): 'pending' | 'processing' | 'success' | 'failed' {
  return statuses[index % statuses.length];
}

// Function to generate a random amount
function generateAmount(): number {
  return Math.floor(Math.random() * 500) + 50; // Amount between 50 and 549
}

export const dashboardData: Data[] = [];

// Generate 100 entries
for (let i = 0; i < 100; i++) {
  dashboardData.push({
    id: generateId(i),
    amount: generateAmount(),
    status: generateStatus(i),
    email: generateEmail(i),
  });
}
