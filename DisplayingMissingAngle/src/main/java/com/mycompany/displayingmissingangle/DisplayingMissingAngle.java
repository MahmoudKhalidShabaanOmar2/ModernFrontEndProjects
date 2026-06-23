/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.displayingmissingangle;

/**
 *
 * @author moka
 */
// Write A Java Program To Get Two Angles From The User , And Then Displaying 
// The Third Angle , And Determine The Type Of The Angle =>
// Displaying Acuate , If The Angle Is Less Than 90.
// Displaying Right , If The Angle Is Excatly 90.
// Displaying Obtuse , If The Angle Is Grater Than 90.
import java.util.Scanner;
public class DisplayingMissingAngle{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Please Enter The Frist Angle Is = ");
        int FristAngle = input.nextInt();
        System.out.printf("The Frist Angle Is : %d%n", FristAngle);
        System.out.print("Please Enter The Second Angle Is = ");
        int SecondAngle = input.nextInt();
        System.out.printf("The Second Angle Is = %d%n", SecondAngle);
        int ThirdAngle = 180 - (FristAngle + SecondAngle);
        System.out.printf("The Third Angle Is = %d%n", ThirdAngle);
        if(ThirdAngle > 0 && ThirdAngle < 90){
            System.out.println("Acuate...");
        }
        else if(ThirdAngle == 90){
            System.out.println("Right...");
        }
        else if(ThirdAngle > 90 && ThirdAngle <= 180){
            System.out.println("Obtuse...");
        }
        else{
            System.out.println("Please Enter A Valid Two Angles...");
        }
    }
}