package com.example.medico;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

public class UserRegistration extends AppCompatActivity {
private TextView mEmergencyTV,mBloodBankTV,mNearbyTV;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_registration);
        mEmergencyTV = findViewById(R.id.Emergency_TV);
        mBloodBankTV = findViewById(R.id.BloodBANK_TV);
        mNearbyTV = findViewById(R.id.NEARBY_HOSPITAL_TV);

        mEmergencyTV.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(UserRegistration.this,MapsActivity.class);
                startActivity(i);
            }
        });

    }
}
