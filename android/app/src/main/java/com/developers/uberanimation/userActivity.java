package com.developers.uberanimation;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class userActivity extends AppCompatActivity {
private TextView requestEmergencyTV,mBloodBankTV,mMedicalAttentionTV;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user);
        requestEmergencyTV=findViewById(R.id.request_emergency_id);
        mBloodBankTV = findViewById(R.id.blood_bank_tv);
        mMedicalAttentionTV=findViewById(R.id.request_place_tv);

        requestEmergencyTV.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(userActivity.this,MapsActivity.class);
                startActivity(i);
            }
        });


    }
}
