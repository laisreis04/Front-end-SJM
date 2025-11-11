import java.util.Scanner;

public class Ex_08 {
    static void main() {


        Scanner input = new Scanner(System.in);

        //Declarar variaveis
        int[][] matriz = new int[3][3];

        //Preencher a matriz
        for(int linha = 0; linha < matriz.length; linha++){ //Preencher linha por linha
            for(int coluna = 0; coluna < matriz[0].length; coluna++){
                System.out.println("Digite um valor: ");
                matriz[linha][coluna] = input.nextInt();
            }
        }

        //Impimir
        for(int linha = 0; linha < matriz.length; linha++){
            for(int coluna = 0; coluna < matriz[0].length; coluna++){
                System.out.print(matriz[linha][coluna] + " ");
            }
            System.out.println();
        }


    }
}
