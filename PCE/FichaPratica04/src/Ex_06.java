import java.util.Scanner;

public class Ex_06 {
    static void main() {

        Scanner input = new Scanner(System.in);

        //Iniciar as variaveis
        int[] array = new int[5];
        boolean crescente = false;


        //Preencher o array
        for(int i = 0; i < array.length; i++){
            System.out.println("Insira o valor [" + i + "]: ");
            array[i] = input.nextInt();
        }

        //Verificar se está em ordem crescente
        for( int i = 1; i < array.length; i++){
            //Condição - Verificar a gaveta anterior
            if(array[i] < array[i - 1 ]){
                crescente = false;
            }

        }

        //Impimir o resultado
        if( crescente == true){
            System.out.println("Crescente");
        }else {
            System.out.println("Nao crescente");
        }

    }
}
