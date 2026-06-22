/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.checkleapyear;

/**
 *
 * @author moka
 */
// Write A Java Program Program To Get A Year Number From The User , And Then 
// Check The Leap Year , The Year Number Divisible By Four Hundred , Or Four 
// Not One Hundred =>
import java.util.Scanner;
public class CheckLeapYear{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Please Enter The Year Number Is = ");
        int YearNumber = input.nextInt();
        System.out.printf("The Year Number Is : %d%n", YearNumber);
        if(((YearNumber %4 == 0) || (YearNumber %400 == 0)) && (YearNumber %100 != 0)){
            System.out.println("It Is A Leap Year...");
        }
        else{
            System.out.print("It Is Not A Leap Year...");
        }
    }
}