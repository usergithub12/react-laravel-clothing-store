<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\User;
use App\Fileupload;

class AuthController extends Controller
{
    public $loginAfterSignUp = true;

    public function register(Request $request)
    {
      $image = Fileupload::latest('id')->first()->filename;
      $user = User::create([
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'dateOfBirth' => $request->dateOfBirth,
        'image' => $image,
        'phone' => $request->phone,
      ]);

      $token = auth()->login($user);

      return $this->respondWithToken($token);
    }

    public function login(Request $request)
    {
      $credentials = $request->only(['email', 'password']);

      if (!$token = auth()->attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized'], 401);
      }

      return $this->respondWithToken($token);
    }
    public function getAuthUser(Request $request)
    {
        return response()->json(auth()->user());
    }
    public function logout()
    {
        auth()->logout();
        return response()->json(['message'=>'Successfully logged out']);
    }
    protected function respondWithToken($token)
    {
      return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60
      ]);
    }

}