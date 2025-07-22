<template>
  <div class="p-6">
    <!-- Metrics Cards -->
    <div class="grid grid-cols-8 gap-4 mb-8">
      <div class="metric-card text-center">
        <div class="text-3xl font-bold text-gray-900">8</div>
        <div class="text-sm text-gray-600 mt-1">GPU Server</div>
      </div>
      <div class="metric-card text-center">
        <div class="text-3xl font-bold text-gray-900">0</div>
        <div class="text-sm text-gray-600 mt-1">Total Running Cnt</div>
      </div>
      <div class="metric-card text-center">
        <div class="text-3xl font-bold text-red-500">3</div>
        <div class="text-sm text-gray-600 mt-1">Offline</div>
      </div>
      <div class="metric-card text-center">
        <div class="text-3xl font-bold text-orange-500">0</div>
        <div class="text-sm text-gray-600 mt-1">Inactive</div>
      </div>
      <div class="metric-card text-center">
        <div class="text-3xl font-bold text-gray-900">1</div>
        <div class="text-sm text-gray-600 mt-1">CPU Alarm</div>
      </div>
      <div class="metric-card text-center">
        <div class="text-3xl font-bold text-gray-900">0</div>
        <div class="text-sm text-gray-600 mt-1">GPU Alarm</div>
      </div>
      <div class="metric-card text-center">
        <div class="text-3xl font-bold text-gray-900">0</div>
        <div class="text-sm text-gray-600 mt-1">Memory Alarm</div>
      </div>
      <div class="metric-card text-center">
        <div class="text-3xl font-bold text-gray-900">0</div>
        <div class="text-sm text-gray-600 mt-1">Disk Alarm</div>
      </div>
    </div>

    <!-- Search Filters -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div class="grid grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Region ID</label>
          <input 
            type="text" 
            placeholder="Please Input Region ID"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="filters.regionId"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">IP</label>
          <input 
            type="text" 
            placeholder="Please Input IP"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="filters.ip"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Server Name</label>
          <input 
            type="text" 
            placeholder="Server Name"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="filters.serverName"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Node Status</label>
          <select 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="filters.nodeStatus"
          >
            <option value="">Online</option>
            <option value="offline">Offline</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end space-x-3 mt-4">
        <button class="btn-primary">Search</button>
        <button class="btn-secondary">Reset</button>
      </div>
    </div>

    <!-- Server Resource Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium text-gray-900">View Of Render Server Resource</h3>
          <div class="flex items-center space-x-4">
            <div class="flex space-x-2">
              <button class="btn-primary">Freeze</button>
              <button class="btn-secondary">Restart</button>
              <span class="text-sm text-gray-500">Selected 0</span>
            </div>
            <div class="flex items-center space-x-2">
              <select class="px-3 py-1 border border-gray-300 rounded text-sm">
                <option>5s Refresh Rate</option>
                <option>10s Refresh Rate</option>
                <option>30s Refresh Rate</option>
              </select>
              <button class="p-2 text-gray-400 hover:text-gray-600">
                🔄
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="table-header">
                <input type="checkbox" class="rounded border-gray-300">
              </th>
              <th class="table-header">Server Name</th>
              <th class="table-header">IP</th>
              <th class="table-header">Instance Max</th>
              <th class="table-header">CPU Usage</th>
              <th class="table-header">GPU Usage</th>
              <th class="table-header">Memory Usage</th>
              <th class="table-header">Memory Usage</th>
              <th class="table-header">Disk Usage</th>
              <th class="table-header">Node Status</th>
              <th class="table-header">Operation</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="server in servers" :key="server.id">
              <td class="table-cell">
                <input type="checkbox" class="rounded border-gray-300">
              </td>
              <td class="table-cell font-medium">{{ server.name }}</td>
              <td class="table-cell">{{ server.ip }}</td>
              <td class="table-cell">{{ server.instanceMax }}</td>
              <td class="table-cell">
                <span :class="getCpuUsageClass(server.cpuUsage)">{{ server.cpuUsage }}</span>
              </td>
              <td class="table-cell">{{ server.gpuUsage }}</td>
              <td class="table-cell">
                <span :class="getMemoryUsageClass(server.memoryUsage)">{{ server.memoryUsage }}</span>
              </td>
              <td class="table-cell">{{ server.memoryUsage2 }}</td>
              <td class="table-cell">{{ server.diskUsage }}</td>
              <td class="table-cell">
                <span :class="getStatusClass(server.status)" class="px-2 py-1 rounded-full text-xs font-medium">
                  {{ server.status }}
                </span>
              </td>
              <td class="table-cell">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-800 text-sm">Detail</button>
                  <button class="text-blue-600 hover:text-blue-800 text-sm">Freeze</button>
                  <button class="text-blue-600 hover:text-blue-800 text-sm">Restart</button>
                  <button class="text-blue-600 hover:text-blue-800 text-sm">Remote</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Monitor',
  data() {
    return {
      filters: {
        regionId: '',
        ip: '',
        serverName: '',
        nodeStatus: ''
      },
      servers: [
        {
          id: 1,
          name: 'Node-06',
          ip: '10.6.0.10',
          instanceMax: 0,
          cpuUsage: '0%',
          gpuUsage: '0%',
          memoryUsage: '3%',
          memoryUsage2: '11%',
          diskUsage: '46%',
          status: 'Online'
        },
        {
          id: 2,
          name: '4core-abu-dhabi',
          ip: '10.6.0.16',
          instanceMax: 0,
          cpuUsage: '100%',
          gpuUsage: '54%',
          memoryUsage: '88%',
          memoryUsage2: '79%',
          diskUsage: '46%',
          status: 'Online'
        }
      ]
    }
  },
  methods: {
    getCpuUsageClass(usage) {
      const percent = parseInt(usage)
      if (percent >= 80) return 'text-red-600 font-medium'
      if (percent >= 60) return 'text-orange-600 font-medium'
      return 'text-gray-900'
    },
    getMemoryUsageClass(usage) {
      const percent = parseInt(usage)
      if (percent >= 80) return 'text-red-600 font-medium'
      if (percent >= 60) return 'text-orange-600 font-medium'
      return 'text-gray-900'
    },
    getStatusClass(status) {
      switch (status.toLowerCase()) {
        case 'online':
          return 'bg-green-100 text-green-800'
        case 'offline':
          return 'bg-red-100 text-red-800'
        case 'inactive':
          return 'bg-yellow-100 text-yellow-800'
        default:
          return 'bg-gray-100 text-gray-800'
      }
    }
  }
}
</script>
