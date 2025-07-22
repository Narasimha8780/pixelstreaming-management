const statistics = {
  totalUsageCount: 1569,
  totalUsageTime: 11855,
  usageCountRanking: [
    { name: 'Damac_Cavalli', count: 220 },
    { name: 'Damac_Crown', count: 180 },
    { name: 'Damac_Island', count: 170 },
    { name: 'La_Mazzoni_v2', count: 150 },
    { name: 'Abu_dhabi_digital_twin', count: 140 },
    { name: 'Cavali_RT', count: 120 },
    { name: 'Damac_Crown', count: 105 },
    { name: 'Yas_island', count: 80 },
    { name: 'Damac_Hills', count: 75 },
    { name: 'Damac_Riverside', count: 75 }
  ],
  usageTimeRanking: [
    { name: 'Damac_Crown', time: 1700 },
    { name: 'Damac_Cavalli', time: 1100 },
    { name: 'Yas_island-v5', time: 900 },
    { name: 'Damac_Island', time: 850 },
    { name: 'Yas_island-v6', time: 800 },
    { name: 'Cavali_RT', time: 750 },
    { name: 'La_Mazzoni_v2', time: 700 },
    { name: 'Damac_Crown', time: 650 },
    { name: 'Damac_Island_v2', time: 600 },
    { name: 'Abu_dhabi_digital_twin', time: 600 }
  ],
  usageByCountry: [
    { country: '亚太地区', count: 580 },
    { country: '澳大利亚', count: 520 },
    { country: '印度', count: 320 },
    { country: '阿联酋', count: 80 },
    { country: '美国', count: 40 },
    { country: '中国', count: 30 },
    { country: '马尔代夫', count: 20 },
    { country: '新加坡', count: 15 }
  ],
  concurrencyStats: {
    labels: ['2025-06-23', '2025-06-26', '2025-06-29', '2025-07-02', '2025-07-05', '2025-07-08', '2025-07-11', '2025-07-14', '2025-07-17', '2025-07-20'],
    totalRunningCnt: [15, 20, 20, 41, 37, 10, 8, 11, 6, 0],
    maxRunningCnt: [3, 2, 2, 2, 3, 1, 2, 2, 2, 0]
  }
}

exports.getStatistics = (req, res) => {
  res.json({
    totalUsageCount: statistics.totalUsageCount,
    totalUsageTime: statistics.totalUsageTime,
    usageCountRanking: statistics.usageCountRanking,
    usageTimeRanking: statistics.usageTimeRanking,
    concurrencyStats: statistics.concurrencyStats
  })
}

exports.getCountryStatistics = (req, res) => {
  res.json({
    usageByCountry: statistics.usageByCountry
  })
}
