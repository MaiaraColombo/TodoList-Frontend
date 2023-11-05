import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',  
  templateUrl: './todo-list.component.html', 
  styleUrls: ['./todo-list.component.css']  
})
export class TodoListComponent {
  
  taskArry = [{ taskName: "Arrumar a cama", isCompleted: false }];

  // Método chamado quando o formulário é submetido
  onSubmit(form: NgForm) {
    // Adiciona uma nova tarefa ao array 'taskArry' com base nos dados do formulário
    this.taskArry.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });
    // Reseta o formulário
    form.reset();
  }

  // Método para excluir uma tarefa com base em seu índice no array
  onDelete(index: number) {
    this.taskArry.splice(index, 1);
  }

  // Método para marcar ou desmarcar uma tarefa como concluída
  onCheck(index: number) {
    this.taskArry[index].isCompleted = !this.taskArry[index].isCompleted;
  }
}
