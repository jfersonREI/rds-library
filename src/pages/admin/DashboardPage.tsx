// src/pages/admin/DashboardPage.tsx
import React from 'react';
import { DataTable } from '@/components/ui/data-table';
import { dashboardColumns } from './dashboard-components/dashboard-columns';
import { dashboardData } from './dashboard-components/dashboard-data';
import MetricCard from '@/components/MetricCard/MetricCard';

import { Target, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * @component DashboardPage
 * @description The Admin Dashboard page, featuring a data table for metrics.
 */
const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="bg-primary text-primary-foreground relative flex h-full w-full rounded-lg p-6">
            <div className="text-primary-foreground mb-6 text-lg font-semibold md:text-2xl">
              Welcome Back <br />
              User!
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-3 md:col-span-8 md:mt-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
            <div className="">
              {/* Conversion rate */}
              <MetricCard
                title="Conversion Rate"
                description="Sales conversion this month"
                footerText="Target: 3.5%"
                footerIcon={Target}
                className="h-full shadow-none"
              >
                <div className="text-chart-1 text-3xl font-bold">4.2%</div>
                <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="bg-chart-1 h-2 rounded-full"
                    style={{ width: '84%' }}
                  ></div>
                </div>
                <div className="text-muted-foreground mt-1 text-sm">
                  Above target
                </div>
              </MetricCard>
            </div>
            <div className="">
              {/* Custom KPI card */}
              <MetricCard
                title="Monthly Revenue"
                description="Total revenue this month"
                footerText="Goal: $50K"
                footerIcon={DollarSign}
                className="h-full shadow-none"
              >
                <div className="space-y-2">
                  <div className="text-chart-1 text-3xl font-bold">$42,350</div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="bg-chart-1 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    85% of monthly goal
                  </div>
                </div>
              </MetricCard>
            </div>
            <div className="">
              {/* Engagement metrics */}
              <MetricCard
                title="Engagement Rate"
                description="User engagement metrics"
                footerText="Industry avg: 2.4%"
                footerIcon={BarChart3}
                className="h-full shadow-none"
              >
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold">3.8%</div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+0.6%</span>
                  </div>
                </div>
                <div className="text-muted-foreground mt-2 text-sm">
                  Above industry average
                </div>
              </MetricCard>
            </div>
            <div className="">
              {/* Engagement metrics */}
              <MetricCard
                title="Engagement Rate"
                description="User engagement metrics"
                footerText="Industry avg: 2.4%"
                footerIcon={BarChart3}
                className="h-full shadow-none"
              >
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold">3.8%</div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+0.6%</span>
                  </div>
                </div>
                <div className="text-muted-foreground mt-2 text-sm">
                  Above industry average
                </div>
              </MetricCard>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background text-foreground rounded-sm border p-6 md:p-8">
        <h2 className="mb-6 flex items-center justify-between text-2xl font-bold">
          <span>Key Metrics Table</span>
        </h2>

        <DataTable
          columns={dashboardColumns}
          data={dashboardData}
          showToolbar={true}
          showDisplayCount={true}
          striped={false}
          enableGlobalFilter={true}
          tableId="main-dashboard-table"
          excludedPrintColumnIds={['select', 'actions']}
          bulkActionButtons={
            <>
              <Button variant="outline" size="sm">
                Mark as Reviewed
              </Button>
              <Button variant="destructive" size="sm">
                Delete Selected
              </Button>
            </>
          }
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default DashboardPage;
