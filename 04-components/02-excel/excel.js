

$(function() {
  var data = [
    ['login_name', '登录名', 'C(7)', 'N', 'Y', '不许超过六个字符'],
    ['password', '密码', 'C(7)', 'N', 'N', '限制六位'],
    ['chinese_name', '中文名', 'C(7)', 'N', 'N', '不允许有字符'],
    ['english_name', '英文名', 'C(7)', 'Y', 'N', '不区分大小写'],
    ['gender', '性别', 'C(2)', 'Y', 'N', '男/女'],
    ['address', '家庭住址', 'C(17)', 'Y', 'N', '具体到市'],
    ['mobile', '联系电话', 'C(17)', 'Y', 'N', '电话/手机'],
    ['comment', '备注', 'C(77)', 'Y', 'N', '/']
    
  ];

  var container = $('.main');
  var hot = new Handsontable(container.get(0), {
        data: data,
          //快捷菜单
          contextMenu: true,   
          //行拖动
          manualRowResize : true, 
         // 列拖动
          manualColumnResize : true,   
          rowHeaders: true,
          
          colHeaders: [
                  '字段',
                  '说明',
                  '数据类型',
                  '允许为空',
                  '主键',
                  '备注'
          ]
     });
 });



