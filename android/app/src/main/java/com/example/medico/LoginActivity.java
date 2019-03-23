package com.example.medico;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

public class LoginActivity extends AppCompatActivity {
    public EditText UserMail_ET , UserPWD_ET;
    public Button USERSubmit;
    private String mailID, password;
    private boolean success = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        UserMail_ET = findViewById(R.id.USER_MAIL_ET);
        UserPWD_ET = findViewById(R.id.USER_PASSWORD_ET);
    }
}
