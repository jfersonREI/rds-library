import { useState } from 'react';

import { Typography } from '@/components/ui/typography';
import MetricCard from '@/components/MetricCard';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
} from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  TrendingUp,
  Activity,
  Users,
  DollarSign,
  ShoppingCart,
  Eye,
  Target,
  BarChart3,
} from 'lucide-react';

// Demo data with TypeScript interface
interface ChartData {
  month: string;
  visitors: number;
  sales: number;
  revenue: number;
}

// Interface for the filtered chart data (desktop/mobile breakdown)
interface FilteredChartData {
  date: string;
  desktop: number;
  mobile: number;
}

const sampleData: ChartData[] = [
  { month: 'January', visitors: 186, sales: 80, revenue: 1200 },
  { month: 'February', visitors: 305, sales: 120, revenue: 1800 },
  { month: 'March', visitors: 237, sales: 90, revenue: 1350 },
  { month: 'April', visitors: 273, sales: 110, revenue: 1650 },
  { month: 'May', visitors: 209, sales: 95, revenue: 1425 },
  { month: 'June', visitors: 314, sales: 140, revenue: 2100 },
];

// Sample data for the time-filtered chart (desktop/mobile breakdown)
const chartData: FilteredChartData[] = [
  { date: '2024-04-01', desktop: 222, mobile: 150 },
  { date: '2024-04-02', desktop: 97, mobile: 180 },
  { date: '2024-04-03', desktop: 167, mobile: 120 },
  { date: '2024-04-04', desktop: 242, mobile: 260 },
  { date: '2024-04-05', desktop: 373, mobile: 290 },
  { date: '2024-04-06', desktop: 301, mobile: 340 },
  { date: '2024-04-07', desktop: 245, mobile: 180 },
  { date: '2024-04-08', desktop: 409, mobile: 320 },
  { date: '2024-04-09', desktop: 59, mobile: 110 },
  { date: '2024-04-10', desktop: 261, mobile: 190 },
  { date: '2024-04-11', desktop: 327, mobile: 350 },
  { date: '2024-04-12', desktop: 292, mobile: 210 },
  { date: '2024-04-13', desktop: 342, mobile: 380 },
  { date: '2024-04-14', desktop: 137, mobile: 220 },
  { date: '2024-04-15', desktop: 120, mobile: 170 },
  { date: '2024-04-16', desktop: 138, mobile: 190 },
  { date: '2024-04-17', desktop: 446, mobile: 360 },
  { date: '2024-04-18', desktop: 364, mobile: 410 },
  { date: '2024-04-19', desktop: 243, mobile: 180 },
  { date: '2024-04-20', desktop: 89, mobile: 150 },
  { date: '2024-05-01', desktop: 315, mobile: 250 },
  { date: '2024-05-02', desktop: 200, mobile: 300 },
  { date: '2024-05-03', desktop: 180, mobile: 200 },
  { date: '2024-05-04', desktop: 390, mobile: 320 },
  { date: '2024-05-05', desktop: 420, mobile: 380 },
  { date: '2024-05-06', desktop: 350, mobile: 280 },
  { date: '2024-05-07', desktop: 280, mobile: 240 },
  { date: '2024-05-08', desktop: 460, mobile: 400 },
  { date: '2024-05-09', desktop: 190, mobile: 160 },
  { date: '2024-05-10', desktop: 310, mobile: 270 },
  { date: '2024-06-01', desktop: 400, mobile: 350 },
  { date: '2024-06-02', desktop: 300, mobile: 280 },
  { date: '2024-06-03', desktop: 250, mobile: 220 },
  { date: '2024-06-04', desktop: 450, mobile: 380 },
  { date: '2024-06-05', desktop: 380, mobile: 340 },
  { date: '2024-06-06', desktop: 320, mobile: 290 },
  { date: '2024-06-07', desktop: 280, mobile: 250 },
  { date: '2024-06-08', desktop: 500, mobile: 420 },
  { date: '2024-06-09', desktop: 220, mobile: 190 },
  { date: '2024-06-10', desktop: 360, mobile: 310 },
  { date: '2024-06-20', desktop: 480, mobile: 400 },
  { date: '2024-06-25', desktop: 520, mobile: 450 },
  { date: '2024-06-28', desktop: 490, mobile: 420 },
  { date: '2024-06-29', desktop: 510, mobile: 440 },
  { date: '2024-06-30', desktop: 530, mobile: 460 },
];

// Chart configurations with proper typing
const chartConfigs: Record<string, ChartConfig> = {
  visitors: {
    visitors: {
      label: 'Visitors',
      color: 'var(--chart-1)',
    },
  },
  sales: {
    sales: {
      label: 'Sales',
      color: 'var(--chart-2)',
    },
  },
  revenue: {
    revenue: {
      label: 'Revenue',
      color: 'var(--chart-3)',
    },
  },
  visitorsByDevice: {
    visitors: {
      label: 'Visitors',
    },
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  },
};

export default function About() {
  const [timeRange, setTimeRange] = useState('90d');

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date('2024-06-30');
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <>
      <section className="section-padding-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Typography variant="h1" as="h1" className="mb-6">
            About
          </Typography>

          <div className="mb-8">
            <MetricCard
              title="Area Chart - Interactive"
              description="Showing total visitors for the last 3 months"
              cardAction={
                <>
                  {/* Toggle Group for larger screens (lg and up) */}
                  <ToggleGroup
                    variant="outline"
                    type="single"
                    value={timeRange}
                    onValueChange={(value) => value && setTimeRange(value)}
                    className="hidden border-0 lg:flex"
                  >
                    <ToggleGroupItem
                      value="90d"
                      aria-label="Last 3 months"
                      className="border-color flex-auto px-4 transition-all"
                    >
                      Last 3 months
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="30d"
                      aria-label="Last 30 days"
                      className="border-color flex-auto px-4 transition-all"
                    >
                      Last 30 days
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="7d"
                      aria-label="Last 7 days"
                      className="border-color flex-auto px-4 transition-all"
                    >
                      Last 7 days
                    </ToggleGroupItem>
                  </ToggleGroup>

                  {/* Select for smaller screens (below lg) */}
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger
                      className="w-[160px] rounded-lg lg:hidden"
                      aria-label="Select a value"
                    >
                      <SelectValue placeholder="Last 3 months" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="90d" className="rounded-lg">
                        Last 3 months
                      </SelectItem>
                      <SelectItem value="30d" className="rounded-lg">
                        Last 30 days
                      </SelectItem>
                      <SelectItem value="7d" className="rounded-lg">
                        Last 7 days
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </>
              }
            >
              {/* Your chart or metric content */}

              <ChartContainer
                config={chartConfigs.visitorsByDevice}
                className="aspect-auto h-[250px] w-full"
              >
                <AreaChart data={filteredData}>
                  <defs>
                    <linearGradient
                      id="fillDesktop"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="var(--color-desktop)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--color-desktop)"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="var(--color-mobile)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--color-mobile)"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      });
                    }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          });
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    fill="url(#fillMobile)"
                    stroke="var(--color-mobile)"
                    stackId="a"
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#fillDesktop)"
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </MetricCard>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-4">
            {/* Area Chart - Visitors */}
            <MetricCard
              title="Website Visitors"
              description="Total visitors for the last 6 months"
              footerText="Trending up by 12.5% this month"
              footerSubtext="January - June 2024"
              footerIcon={TrendingUp}
            >
              <ChartContainer config={chartConfigs.visitors}>
                <AreaChart
                  accessibilityLayer
                  data={sampleData}
                  margin={{ left: 12, right: 12 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value: string) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="visitors"
                    type="natural"
                    fill="var(--color-visitors)"
                    fillOpacity={0.4}
                    stroke="var(--color-visitors)"
                  />
                </AreaChart>
              </ChartContainer>
            </MetricCard>
            {/* Bar Chart - Sales */}
            <MetricCard
              title="Monthly Sales"
              description="Product sales performance"
              footerText="Average 108 sales per month"
              footerSubtext="Best month: June"
              footerIcon={ShoppingCart}
            >
              <ChartContainer config={chartConfigs.sales}>
                <BarChart
                  accessibilityLayer
                  data={sampleData}
                  margin={{ left: 12, right: 12 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value: string) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
                </BarChart>
              </ChartContainer>
            </MetricCard>
            {/* Line Chart - Revenue */}
            <MetricCard
              title="Revenue Growth"
              description="Monthly revenue tracking"
              footerText="Revenue increased by 18.3%"
              footerSubtext="Target: $2000/month"
              footerIcon={DollarSign}
            >
              <ChartContainer config={chartConfigs.revenue}>
                <LineChart
                  accessibilityLayer
                  data={sampleData}
                  margin={{ left: 12, right: 12 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value: string) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Line
                    dataKey="revenue"
                    type="monotone"
                    stroke="var(--color-revenue)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </MetricCard>
            {/* Custom Chart - Multiple data series */}
            <MetricCard
              title="Sales vs Revenue"
              description="Comparison of sales and revenue"
              footerText="Strong correlation"
              footerIcon={Activity}
            >
              <ChartContainer
                config={{
                  sales: { label: 'Sales', color: 'var(--chart-1)' },
                  revenue: { label: 'Revenue', color: 'var(--chart-2)' },
                }}
              >
                <AreaChart
                  accessibilityLayer
                  data={sampleData}
                  margin={{ left: 12, right: 12 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value: string) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="sales"
                    type="natural"
                    fill="var(--color-sales)"
                    fillOpacity={0.4}
                    stroke="var(--color-sales)"
                    stackId="a"
                  />
                  <Area
                    dataKey="revenue"
                    type="natural"
                    fill="var(--color-revenue)"
                    fillOpacity={0.4}
                    stroke="var(--color-revenue)"
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
            </MetricCard>
            {/* Simple metric without chart */}
            <MetricCard
              title="Total Sessions"
              description="Overall website sessions"
              footerText="Last updated 5 minutes ago"
              footerIcon={Eye}
            >
              <div className="text-foreground text-3xl font-bold">24,567</div>
              <div className="text-muted-foreground text-sm">
                +12% from last month
              </div>
            </MetricCard>
            {/* Custom content */}
            <MetricCard
              title="Performance Score"
              footerText="Excellent performance"
            >
              <div className="flex h-32 items-center justify-center">
                <div className="text-6xl font-bold text-green-600">A+</div>
              </div>
            </MetricCard>
            {/* Status indicator */}
            <MetricCard
              title="System Status"
              footerText="All systems operational"
              footerIcon={Activity}
            >
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-lg font-medium text-gray-900">
                  Online
                </span>
              </div>
              <div className="text-muted-foreground mt-2 text-sm">
                Uptime: 99.9%
              </div>
            </MetricCard>
            {/* User metrics */}
            <MetricCard
              title="Active Users"
              description="Currently online users"
              footerText="Peak today: 1,847"
              footerSubtext="Average: 1,234 users"
              footerIcon={Users}
            >
              <div className="text-4xl font-bold text-blue-600">1,456</div>
              <div className="mt-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-600">+8.2%</span>
              </div>
            </MetricCard>
            {/* Conversion rate */}
            <MetricCard
              title="Conversion Rate"
              description="Sales conversion this month"
              footerText="Target: 3.5%"
              footerIcon={Target}
            >
              <div className="text-3xl font-bold text-purple-600">4.2%</div>
              <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-purple-600"
                  style={{ width: '84%' }}
                ></div>
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                Above target
              </div>
            </MetricCard>
            {/* Custom KPI card */}
            <MetricCard
              title="Monthly Revenue"
              description="Total revenue this month"
              footerText="Goal: $50K"
              footerIcon={DollarSign}
            >
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">$42,350</div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-green-600"
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <div className="text-muted-foreground text-sm">
                  85% of monthly goal
                </div>
              </div>
            </MetricCard>
            {/* Engagement metrics */}
            <MetricCard
              title="Engagement Rate"
              description="User engagement metrics"
              footerText="Industry avg: 2.4%"
              footerIcon={BarChart3}
            >
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold text-orange-600">3.8%</div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">+0.6%</span>
                </div>
              </div>
              <div className="text-muted-foreground mt-2 text-sm">
                Above industry average
              </div>
            </MetricCard>
          </div>
        </div>
      </section>
    </>
  );
}
