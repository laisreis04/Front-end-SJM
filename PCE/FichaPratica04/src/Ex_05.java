import java.util.Scanner;

public class Ex_05 {
    static void main() {

        Scanner input = new Scanner(System.in);

        //Iniciar um array
        int[] array = new int[3];
        int soma = 0;
        int media = 0;


        //Preencher o array
        for(int i = 0; i < array.length; i++){
            System.out.println("Insira o valor [" + i + "]: ");
            array[i] = input.nextInt();

            //Calcular a média
            soma = soma + array[i];
            //soma += array[i]; Posso escrever dessa forma
        }

            media = soma / array.length;

        System.out.println("A média é: " + media);


    }
}
