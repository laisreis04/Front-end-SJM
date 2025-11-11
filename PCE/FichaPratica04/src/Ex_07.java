import java.util.Scanner;

public class Ex_07 {
    static void main() {

        Scanner input = new Scanner(System.in);

        //Declarar variaveis
        int[] array = new int[3];
        int maiorNumPar = 0;

        //Preencher o array
        for(int i = 0; i < array.length; i++){
            System.out.println("Insira o valor " + i + ": ");
            array[i] = input.nextInt();
        }

        maiorNumPar = array[0];
        // Verificar o maior numero par

        for(int i = 0; i < array.length; i++){
            //Verificar se é par
            if(array[i] % 2 == 0){
                //Verificar o maior numero
                if(array[i] > maiorNumPar){
                    maiorNumPar = array[i];
                }
            }
        }

        System.out.println("Maior valor par é : " + maiorNumPar);

    }
}
