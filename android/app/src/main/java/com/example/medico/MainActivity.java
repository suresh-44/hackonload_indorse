package com.example.medico;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    public TextView Login_tv = findViewById(R.id.loginTV);
    public TextView Driver_register_tv = findViewById(R.id.DriverTV);
    public TextView HA_Register_tv = findViewById(R.id.HARegisterTv);
    public TextView Signup_Tv = findViewById(R.id.SIGN_UP_TV);



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

}
