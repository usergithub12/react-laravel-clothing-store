<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserController extends Controller
{
    //
    public function CheckIfUserExists(Request $request)
    {
        $email=$request->only('email');
        $user = User::where('email', '=', $email)->first();
        // dd($email);
        if ($user === null) {
            return response()->json(['error' => 'user not exists'], 400);
        }
// return $user->toJson();

return response()->json(compact('user'), 200);
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
