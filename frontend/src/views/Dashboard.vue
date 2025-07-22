<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-sm border-r border-gray-200">
      <!-- Logo -->
      <div class="flex items-center px-6 py-4 border-b border-gray-200">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">PS</span>
          </div>
          <span class="ml-3 text-lg font-semibold text-gray-900">propvr</span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="mt-6">
        <div class="px-3">
          <!-- Data Center Section -->
          <div class="mb-4">
            <button @click="toggleSection('dataCenter')" class="flex items-center w-full px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider focus:outline-none">
              <span>Data Center</span>
              <span class="ml-auto transform transition-transform" :class="{'rotate-180': expandedSections.dataCenter}">⌄</span>
            </button>
            <div v-show="expandedSections.dataCenter" class="pl-4">
              <router-link 
                to="/monitor" 
                class="sidebar-item"
                :class="{ 'active': $route.name === 'Monitor' }"
              >
                <span class="ml-3">Monitor</span>
              </router-link>
              <router-link 
                to="/usage-statistics" 
                class="sidebar-item"
                :class="{ 'active': $route.name === 'UsageStatistics' }"
              >
                <span class="ml-3">Usage Statistics</span>
              </router-link>
              <div class="sidebar-item">
                <span class="ml-3">clientErrLog</span>
              </div>
            </div>
          </div>

          <!-- Applications Section -->
          <div class="mb-4">
            <div class="flex items-center px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Applications
            </div>
            <div class="sidebar-item">
              <span class="ml-3">package</span>
            </div>
            <div class="sidebar-item">
              <span class="ml-3">Application</span>
            </div>
          </div>

          <div class="mb-4">
            <div class="sidebar-item">
              <span class="ml-3">Reserve Applications</span>
            </div>
            <div class="sidebar-item">
              <span class="ml-3">Run Applications</span>
            </div>
            <div class="sidebar-item">
              <span class="ml-3">Synchronization List</span>
            </div>
            <div class="sidebar-item">
              <span class="ml-3">Client List</span>
            </div>
            <div class="sidebar-item">
              <span class="ml-3">Group Mgt</span>
            </div>
          </div>

          <!-- System Setting Section -->
          <div class="mb-4">
            <div class="flex items-center px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              System Setting
            </div>
            <div class="sidebar-item">
              <span class="ml-3">Param Setting</span>
            </div>
            <div class="sidebar-item">
              <span class="ml-3">Admin Auth</span>
            </div>
            <div class="sidebar-item">
              <span class="ml-3">WorkSpace</span>
            </div>
          </div>

          <!-- Users Section -->
          <div class="mb-4">
            <div class="sidebar-item">
              <span class="ml-3">Users</span>
            </div>
          </div>
        </div>
      </nav>

      <!-- Version Info -->
      <div class="absolute bottom-0 left-0 right-0 p-4 text-xs text-gray-500">
        <div>Version: 3.3.3.2</div>
        <div>LicenceType: dev edition (Overseas)</div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="flex items-center justify-between px-6 py-4">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">{{ pageTitle }}</h1>
          </div>
          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <span class="sr-only">Language</span>
              🌐
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <span class="sr-only">Help</span>
              ❓
            </button>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-700">admin</span>
              <button class="p-2 text-gray-400 hover:text-gray-600">
                <span class="sr-only">User menu</span>
                👤
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    pageTitle() {
      const titles = {
        'Monitor': 'GPU Server Resource Overview',
        'UsageStatistics': 'Usage Statistics'
      }
      return titles[this.$route.name] || 'Dashboard'
    }
  }
}
</script>
