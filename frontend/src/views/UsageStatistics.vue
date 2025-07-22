<template>
  <div class="p-6">
    <!-- Time Filter Buttons -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-2">
        <span class="text-sm font-medium text-gray-700">Choose To Apply</span>
        <div class="flex space-x-1">
          <button 
            v-for="filter in timeFilters" 
            :key="filter.value"
            @click="selectedTimeFilter = filter.value"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              selectedTimeFilter === filter.value 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
      <button class="btn-primary">Export</button>
    </div>

    <!-- Top Statistics Cards -->
    <div class="grid grid-cols-2 gap-6 mb-8">
      <!-- Total Usage Count -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-medium text-gray-900">Total Usage Count (Times)</h3>
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span class="text-white text-xs font-bold">📊</span>
            </div>
          </div>
        </div>
        <div class="text-3xl font-bold text-gray-900">1569</div>
      </div>

      <!-- Total Usage Time -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-medium text-gray-900">Total Usage Time (Minutes)</h3>
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span class="text-white text-xs font-bold">📈</span>
            </div>
          </div>
        </div>
        <div class="text-3xl font-bold text-gray-900">11855</div>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-2 gap-6 mb-8">
      <!-- Usage Count Ranking -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Usage Count Ranking</h3>
        <div class="h-64">
          <canvas ref="usageCountChart"></canvas>
        </div>
      </div>

      <!-- Usage Time Ranking -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Usage Time Ranking</h3>
        <div class="h-64">
          <canvas ref="usageTimeChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Bottom Charts Grid -->
    <div class="grid grid-cols-2 gap-6">
      <!-- Usage Statistics By Country -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Usage Statistics By Country</h3>
        <div class="h-64">
          <canvas ref="countryChart"></canvas>
        </div>
      </div>

      <!-- Last 30 days Concurrency Statistics -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Last 30 days Concurrency Statistics</h3>
        <div class="h-64">
          <canvas ref="concurrencyChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'UsageStatistics',
  data() {
    return {
      selectedTimeFilter: 'All',
      timeFilters: [
        { label: 'All', value: 'All' },
        { label: 'Today', value: 'Today' },
        { label: 'Yesterday', value: 'Yesterday' },
        { label: 'Last 7 days', value: 'Last7' },
        { label: 'Last 30 days', value: 'Last30' },
        { label: 'Custom', value: 'Custom' }
      ],
      charts: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeCharts()
    })
  },
  beforeUnmount() {
    Object.values(this.charts).forEach(chart => {
      if (chart) chart.destroy()
    })
  },
  methods: {
    initializeCharts() {
      this.createUsageCountChart()
      this.createUsageTimeChart()
      this.createCountryChart()
      this.createConcurrencyChart()
    },
    createUsageCountChart() {
      const ctx = this.$refs.usageCountChart.getContext('2d')
      this.charts.usageCount = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Demo_Car', 'Demo_City', 'Demo_House', 'La Maison', 'Public Signage', 'Carrot', 'Demo_Car2', 'VR Island', 'Demo_1', 'Demo_House2'],
          datasets: [{
            data: [220, 190, 180, 160, 150, 140, 120, 100, 90, 80],
            backgroundColor: '#3b82f6',
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: '#f3f4f6'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      })
    },
    createUsageTimeChart() {
      const ctx = this.$refs.usageTimeChart.getContext('2d')
      this.charts.usageTime = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Demo_Car', 'Demo_City', 'VR Island', 'Demo_House', 'VR Island2', 'Carrot', 'La Maison', 'Demo_Car2', 'Demo_Island', 'Public Signage'],
          datasets: [{
            data: [1600, 1000, 900, 850, 800, 750, 700, 650, 600, 550],
            backgroundColor: '#3b82f6',
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: '#f3f4f6'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      })
    },
    createCountryChart() {
      const ctx = this.$refs.countryChart.getContext('2d')
      this.charts.country = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['中国', '美国', '印度', '巴西', '日本', '德国', '英国', '法国'],
          datasets: [{
            data: [580, 520, 320, 80, 40, 30, 20, 15],
            backgroundColor: '#3b82f6',
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: '#f3f4f6'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      })
    },
    createConcurrencyChart() {
      const ctx = this.$refs.concurrencyChart.getContext('2d')
      this.charts.concurrency = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2025-06-23', '2025-06-26', '2025-06-29', '2025-07-02', '2025-07-05', '2025-07-08', '2025-07-11', '2025-07-14', '2025-07-17', '2025-07-20'],
          datasets: [
            {
              label: 'Total Running Cnt',
              data: [15, 30, 25, 45, 35, 55, 40, 65, 50, 45],
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'Max Running Cnt',
              data: [25, 40, 35, 55, 45, 65, 50, 75, 60, 55],
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              fill: true,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: '#f3f4f6'
              }
            },
            x: {
              grid: {
                color: '#f3f4f6'
              }
            }
          }
        }
      })
    }
  }
}
</script>
