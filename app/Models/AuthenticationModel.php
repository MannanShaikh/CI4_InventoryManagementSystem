<?php

namespace App\Models;

use CodeIgniter\Model;

class AuthenticationModel extends Model
{
    protected $table = "employees";

    public function Authenticate($userName, $password)
    {
        return $this->where(['AadharNumber' => $userName])->where(['Password' => $password])->first();
    }
}