import java.util.Scanner;

public class Ex_03 {
    static void main() {


        Scanner input = new Scanner(System.in);

        //Criar um array com 10 posições
        int[] numeros = new int[3];


        //Preecher array- LOOP
        for(int  i= 0; i < numeros.length; i++){
            System.out.println("Insira um valor: [" + i + "]");
            numeros[i] = input.nextInt();
        }

        //LOOP - para verificar o maior númeor

        int maiorNumero = numeros[0];
        for(int i = 0; i < numeros.length; i++){
            //Condição para verificar o maior valor
            if(numeros[i] >maiorNumero){
                maiorNumero = numeros[i];
            }
        }

        System.out.println("Maior valor: " + maiorNumero);
    }
}
