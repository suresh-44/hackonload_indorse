package com.developers.uberanimation;

import android.app.DatePickerDialog;
import android.app.Dialog;
import android.support.v4.app.DialogFragment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Calendar;

public class Bloodbank extends AppCompatActivity {
public  static  String date;
   public static TextView dateTV;
   public TextView U_name,U_age,U_BG,U_Phone;
   public Button submitBT;
public String userName,userAge,userBloodGroup,userPhoneNumber,appointmentDate;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bloodbank);
        dateTV = findViewById(R.id.date);
        U_name = findViewById(R.id.user_name_tv);
        U_age= findViewById(R.id.user_age);
        U_BG= findViewById(R.id.user_blood_group);
        U_Phone=findViewById(R.id.user_phone_number);
        submitBT=findViewById(R.id.submitButton);

    }
    public void submitDetails(View v){
        userName = U_name.getText().toString();
        userAge = U_age.getText().toString();
        userBloodGroup = U_BG.getText().toString();
        userPhoneNumber = U_Phone.getText().toString();
        Toast toast = Toast.makeText(this,"APPOINTMTENT SUCCESSFUL",Toast.LENGTH_LONG);
        toast.show();

    }
    public static class DatePickerFragment extends DialogFragment
            implements DatePickerDialog.OnDateSetListener {

        @Override
        public Dialog onCreateDialog(Bundle savedInstanceState) {

            // Use the current date as the default date in the picker
            final Calendar c = Calendar.getInstance();
            int year = c.get(Calendar.YEAR);
            int month = c.get(Calendar.MONTH);
            int day = c.get(Calendar.DAY_OF_MONTH);
            date = day+"/"+month+"/"+year;
            // Create a new instance of DatePickerDialog and return it
            return new DatePickerDialog(getActivity(), this, year, month, day);
        }

        public void onDateSet(DatePicker view, int year, int month, int day) {
                dateTV.setText(date);
        }

    }
    public void showDatePickerDialog(View v) {
        DialogFragment newFragment = new DatePickerFragment();
        newFragment.show(getSupportFragmentManager(), "datePicker");
    }

}
