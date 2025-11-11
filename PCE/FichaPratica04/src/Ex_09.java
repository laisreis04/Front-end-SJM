import java.util.Scanner;

public class Ex_09 {
    static void main() {

        Scanner input = new Scanner(System.in);

        //Declarar variaveis
        int[][] matriz = new int[2][2];
        int soma = 0;

        //Preencher pelo user

        for(int linha = 0; linha < matriz.length; linha++){
            for( int coluna = 0; coluna < matriz[0].length; coluna++){
                System.out.println("Digite um valor: ");
                matriz[linha][coluna] = input.nextInt();

                soma += matriz[linha][coluna];
            }
        }


        System.out.println("A soma é: " + soma);


    }
}
