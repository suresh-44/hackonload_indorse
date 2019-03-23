package com.example.medico;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    public TextView Login_tv ;
    public TextView Driver_register_tv ;
    public TextView HA_Register_tv ;
    public TextView Signup_Tv ;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Login_tv = findViewById(R.id.loginTV);
        Driver_register_tv = findViewById(R.id.DriverTV);
         HA_Register_tv = findViewById(R.id.HARegisterTv);
         Signup_Tv = findViewById(R.id.SIGN_UP_TV);
Login_tv.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {

        Intent i = new Intent(MainActivity.this,LoginActivity.class);
        startActivity(i);
    }
});


Driver_register_tv.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Intent i = new Intent(MainActivity.this,DriverRegistration.class);
        startActivity(i);
    }
});

HA_Register_tv.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Intent i = new Intent(MainActivity.this,HACRegistration.class);
        startActivity(i);
    }
});
Signup_Tv.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Intent i = new Intent(MainActivity.this,UserRegistration.class);
        startActivity(i);
    }
});
    }

}
