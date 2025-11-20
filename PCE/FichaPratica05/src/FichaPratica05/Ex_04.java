package FichaPratica05;
import org.w3c.dom.ls.LSOutput;

import java.util.Scanner;

import static FichaPratica05.Ex_03.*;

public class Ex_04 {

    static void main() {
        Scanner input = new Scanner(System.in);

        //Guardar a opção escolhida numa variavel e outra para guardar o numero que vai ser testado
        int opcao, numInteiro;

        //Regras do negócio

        //Pedir um numero
        System.out.print("Insira um número inteiro e positivo: ");
        numInteiro = input.nextInt();



        //Menu de opções
        do{
            System.out.println("O que você gostaria de analisar? Escola uma opção");

            System.out.println("1. Par");
            System.out.println("2. Positivo");
            System.out.println("3. Primo");
            System.out.println("4. Perfeito");
            System.out.println("5. Triangular");
            System.out.println("0. Para sair");
            opcao = input.nextInt();

            switch (opcao){
                case 1:
                    if(numeroPar(numInteiro)){
                        System.out.println("O numero " + numInteiro + "É par !");
                    }else {
                        System.out.println("O numero " + numInteiro + "É ímpar !");
                    }
                    break;
                case 2:
                    if(numeroPositivo(numInteiro)){
                        System.out.println("O numero " + numInteiro + "É positivo!");
                    }else {
                        System.out.println("O numero " + numInteiro + "não é positivo!");
                    }
                    break;
                case 3:
                    if(numeroPrimo(numInteiro)){
                        System.out.println("O numero " + numInteiro + "É primo!");
                    }else {
                        System.out.println("O numero " + numInteiro + "não é primo!");
                    }
                    break;
                case 4:
                    if(numeroPerfeito(numInteiro)){
                        System.out.println("O numero " + numInteiro + "É perfeito!");
                    }else {
                        System.out.println("O numero " + numInteiro + "não é perfeito!");
                    }
                    break;
                case 5:
                    if(numeroTriangular(numInteiro)){
                        System.out.println("O numero " + numInteiro + "É triangular!");
                    }else {
                        System.out.println("O numero " + numInteiro + "não é triangular!");
                    }
                    break;
                default:
                    System.out.println("Insira uma opção válida");

            }

        }while(opcao != 0);

    }





}
