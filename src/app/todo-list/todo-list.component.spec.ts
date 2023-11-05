import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

// Descreve um conjunto de testes para o componente TodoListComponent
describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    
    // Configura o ambiente de teste
    TestBed.configureTestingModule({
      declarations: [TodoListComponent]
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   // Teste: deve criar o componente com sucesso
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
