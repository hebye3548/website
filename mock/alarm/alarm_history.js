module.exports =  {
  code: '00001',
  body: {
    pageNo: 1,
    pageSize: 10,
    startRow: 1,
    endRow: 2,
    totalCount: 100,
    results: [
      {
        customerAlarmId: 1,
        customerName: "abc",
        customerType: '1',
        alarmBeginTime: '2018/08/03',
        alarmEndTime: '2018/08/03',
        alarmLevel: '1',
        alarmIp: '127.0.0.1',
        alarmType: '1',
        shieldState: '1',
        shieldType: '1',
        startTime: '2018/08/03',
        operational: 1
      },
      {
        customerAlarmId: 2,
        customerName: "abc",
        customerType: '1',
        alarmBeginTime: '2018/08/03',
        alarmEndTime: '2018/08/03',
        alarmLevel: '1',
        alarmIp: '127.0.0.2',
        alarmType: '1',
        shieldState: '1',
        shieldType: '1',
        startTime: '2018/08/03',
        operational: 1
      }
    ]
  },
  message: 'ok'
}
