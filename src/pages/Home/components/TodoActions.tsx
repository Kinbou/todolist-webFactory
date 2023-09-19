const TodoActions = ({ goToTodoDetail }: { goToTodoDetail: () => void }) => {
  return (
    <div className="absolute top-3px right-0 pl-.5em ">
      <div className="w-40px h-40px !hover:bg-gray-900 flex items-center justify-center rounded-md cursor-pointer">
        <button
          className="i-carbon-edit cursor-pointer"
          onClick={goToTodoDetail}
          type="button"
        />
      </div>
    </div>
  )
}

export default TodoActions
