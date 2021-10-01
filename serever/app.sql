create database blog;

use blog;

-- 用户表
create table `user`(
  `id` int not null auto_increment,
  `username` varchar(20) default null comment '用户名',
  `password` varchar(64) default null comment '密码',
  `avatar` longtext comment '头像',
  `phone` varchar(20) default null comment '电话',
  `sign` varchar(300) default null comment '用户签名',
  `createTime` timestamp default null comment '创建时间',
  `updateTime` timestamp default null comment '更新时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='用户表';
