import java.util.Scanner;

public class Ex_01 {
    static void main() {

//Pedir ao utilizador

        Scanner input = new Scanner(System.in);

        //Criar um novo array, com 10 gavetas
        int[] gavetas = new int[10];

        //criar um ciclo para preencher os valores nas gavetas

        for (int i = 0; i < 10; i++) {

            System.out.print("Insira um valor na gaveta [" + i + "]:");
            gavetas[i] = input.nextInt();
        }

//Ciclo para imprimir os valores guardados na gaveta
        for (int i = 0; i < gavetas.length; i++) {

            System.out.println("Na gaveta da posição[" + i + "]:" + gavetas[i]);
        }
    }
}
