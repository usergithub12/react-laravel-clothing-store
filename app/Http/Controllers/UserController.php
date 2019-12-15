<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function CheckIfUserExists($email)
    {
        $user = User::where('email', '=', $email)->first();
        dd($email);
if ($user === null) {
return false;
}
return $user->toJson();
        // if (User::where('email', '=', $email)->exists()) {     
        //     dd(User::where('email', '=', $email)->exists());   
        //  return true;
        // }
        // else{
        //     dd("empty");
        //     return false;
        // }
    }
}
