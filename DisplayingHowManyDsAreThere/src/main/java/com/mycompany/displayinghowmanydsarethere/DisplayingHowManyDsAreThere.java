/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.displayinghowmanydsarethere;

/**
 *
 * @author moka
 */
// Write A Java Program To Get A Sentence From The User , And Then Displaying 
// The Numbers Of D's In Sentence =>
import java.util.Scanner;
public class DisplayingHowManyDsAreThere{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Please Enter The String Sentence Is : ");
        String StringSentence = input.nextLine();
        System.out.printf("The String Sentence Is : %s%n", StringSentence);
        int LengthOfDsInStringSentence = 0;
        for(int i=0 ; i < StringSentence.length() ; i++){
            if(StringSentence.charAt(i) == 'd' || StringSentence.charAt(i) == 'D'){
                LengthOfDsInStringSentence += 1;
            }
        }
        System.out.printf("The Length Of D\'S In The String Sentence Is : %d%n", LengthOfDsInStringSentence);
    }
}