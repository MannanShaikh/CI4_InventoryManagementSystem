<?php

namespace App\Controllers;

class Authenticaton extends BaseController
{
    public function OnGetLogin()
    {
        return view("authentication/login");
    }

    public function OnPostLogin()
    {
    }

    public function OnGetForgotPassword()
    {
        return view("authentication/forgotPassword");
    }

    public function onPostForgotPassword()
    {
    }

    public function OnGetChangePassword()
    {
        return view("authentication/changePassword");
    }

    public function OnPostChangePassword()
    {
    }
}
