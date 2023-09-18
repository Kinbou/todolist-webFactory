import { ReactNode } from 'react'

import { Todo } from '@models/Todo'

const TodoDetails = ({ todo }: { todo: Todo | undefined }): ReactNode => {
  return (
    <form className="min-w-70% max-w-100% flex flex-col">
      <div className="flex flex-col mb-3rem">
        <label
          className="text-14px mb-.3rem text-gray-200 font-bold"
          htmlFor=""
        >
          Title *
        </label>
        <input
          className="pl-1rem h-50px border-none rounded-md"
          placeholder="enter title"
          value={todo?.title}
          readOnly={!!todo}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor=""
          className="text-14px mb-.3rem text-gray-200 font-bold"
        >
          Description
        </label>
        <textarea
          name={todo?.description}
          id={todo?.id}
          cols={20}
          rows={10}
          className="border-none rounded-md p-1rem max-w-100%"
          readOnly={!!todo}
          value={todo?.description}
        ></textarea>
      </div>
    </form>
  )
}

export default TodoDetails
