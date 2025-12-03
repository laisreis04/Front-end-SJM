package FichaPratica04;

import java.util.Scanner;

public class Ex_04 {
    static void main() {

        Scanner input = new Scanner(System.in);

        //Criar array
        int[] numeros = new int[3];

        //Preencher o array
        for(int i =0; i < numeros.length; i++){
            System.out.println("Insira o valor [" + i + "]: ");
            numeros[i] = input.nextInt();
        }
        //Verificar o menor numero

        int menorValor = numeros[0];

        for(int i = 0 ; i < numeros.length; i++){
            //Condição para preencher o menor valor
            if(numeros[i] < menorValor){
                menorValor = numeros[i];
            }
        }

        System.out.println("Menor valor: " + menorValor);
    }
}
