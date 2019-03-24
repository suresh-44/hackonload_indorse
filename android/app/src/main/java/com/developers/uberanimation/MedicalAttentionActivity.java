package com.developers.uberanimation;

import android.net.Uri;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;

public class MedicalAttentionActivity extends AppCompatActivity {
    private TextView mSearchResultsTextView;
    String DOCTOR_URL="http://10.60.222.53:5000/api/doctor";
    String Doctor_NAME,SPECIALITY
    boolean att;
    int Phone;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
mSearchResultsTextView = findViewById(R.id.resultsTV);
URL DOC_URL = NetwrokUtils.buildUrl(DOCTOR_URL);
        try {
            String Results = NetwrokUtils.getResponseFromHttpUrl(DOC_URL);
            try {
                JSONObject responseObject = new JSONObject(Results);
                Doctor_NAME = responseObject.getString("name");
                SPECIALITY = responseObject.getString("spec");
                Phone = responseObject.getInt("phone");
                att = responseObject.getBoolean("att");



            } catch (JSONException e) {
                e.printStackTrace();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }



}
