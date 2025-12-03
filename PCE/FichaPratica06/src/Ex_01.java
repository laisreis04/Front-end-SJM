import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex_01 {

    static void main(String[] args) throws FileNotFoundException {


        //Indicar o caminho do ficheiro
        File arquivo = new File("FichaPratica06/Ficheiros/ex_01.txt");

        //Leitor de arquivo
        Scanner leitor = new Scanner(arquivo);

        //Executar a impressão do conteudo na consola

        String linha;

        //Ciclo para ler o ficheiro
        while(leitor.hasNextLine()){
            linha = leitor.nextLine();//Guardar o valor da linha
            System.out.println(linha);
        }

        leitor.close();

    }

}
