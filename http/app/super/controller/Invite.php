<?php

namespace app\super\controller;

use think\Controller;
use app\im\model\mysql\User;
use think\facade\Request;

const PAGE_RECORDS = 15;

class Invite extends Controller
{
    public function initialize()
    {
        $super_id = session('super_id');
        if(!$super_id)
        {
            $this->error('请先登录');
        }
    }

    public function index()
    {
        $user_id = (int)Request::param('user_id');
        $invite_list =  User::where('parent_id',$user_id)->paginate(PAGE_RECORDS);


        $list = array();
        foreach($invite_list as $key => $val){
            $user = User::getUserByUserId($val->id);
            if(!$user){
                unset($invite_list[$key]);
                continue;
            }
            $val->nickname = $user->nickname ;
            array_push($list,$val);
        }
        $this->assign('friendlist',  $invite_list);
        $this->assign('list',  $list);
        $this->assign('user_id',$user_id);
        return $this->fetch();
    }

}