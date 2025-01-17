<?php

namespace RachidLaasri\LaravelInstaller\Controllers;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Log;

class InstallHelperController extends Controller
{


    /**
     * Display the purchase code verify page.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function getPurchaseCodeVerifyPage()
    {
        return view('vendor.installer.verify');
    }

    /**
     * Verify purchase code and store info.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\RedirectResponse | \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function verifyPurchaseCode(Request $request)
    {
        // validate request
        $validated = $this->validate($request, [
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'purchase_code' => 'required|string',
            'terms_condition' => 'required',
        ]);

		$verifiedLogFile = storage_path('verified');
		$dateStamp = date('Y/m/d h:i:sa');
		$message = trans('installer_messages.purchase_code.verified_msg').$dateStamp."\n";
		File::put($verifiedLogFile, $message);
		//return view('vendor.installer.welcome');
         return redirect()->route('LaravelInstaller::requirements');
    }

}
