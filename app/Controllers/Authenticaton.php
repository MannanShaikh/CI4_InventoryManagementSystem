<?php

namespace App\Controllers;

use App\Models\AuthenticationModel;
use CodeIgniter\Exceptions\PageNotFoundException;

class Authenticaton extends BaseController
{
    public function OnGetLogin()
    {
        return view("authentication/login");
    }

    public function OnPostLogin()
    {
        $model = model(AuthenticationModel::class);

        $username = $this->request->getVar('aadhar');
        $password = $this->request->getVar('pwd');

        if (empty($username) || empty($password)) {
            throw new PageNotFoundException('');
        } else {
        }
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
