#include <bits/stdc++.h>
using namespace std;

void mostraVetor(vector<int> &vet){
    for(int i = 0; i < vet.size(); i++){
        cout << vet.at(i) << " ";
    }
    cout << endl;
}

int main(){
    vector<int> vet;

    cout << "Qual o tamanho do vetor: ";
    int tamanho;
    cin >> tamanho;                             //scanf("%d", &tamanho);

    cout << "Escrita do vetor: " << endl;
    for(int i = 0; i < tamanho; i++){
        int aux;
        cin >> aux;
        vet.push_back(aux);
    }

    mostraVetor(vet);

    cout << "Qual posicao voce quer saber o que ta guardado la dentro: ";
    int posicao;
    cin >> posicao;
    cout << vet.at(posicao);

    cout << "Vetor ordenado" << endl;
    sort(vet.begin(), vet.end());
    mostraVetor(vet);

}