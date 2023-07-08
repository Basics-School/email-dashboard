import { StarIcon } from 'lucide-react'
import React from 'react'

const EmailView = () => {
  return (
    <div>
    <h2 class="mt-10 font-medium">Interview - Plato Agency</h2>
    <div class="text-zinc-400 text-sm mt-5 space-y-3">
      <p>Hello John, we hope you are doing well!</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsa
        repellendus dolores, iure quisquam a, autem cupiditate hic accusantium
        ratione, enim mollitia iste amet error obcaecati rerum. In, sed corporis?
      </p>
    </div>

    <div class="flex items-center justify-between text-sm text-zinc-200 mt-10">
      <p>Plato Agency HR</p>
      <a href="#" class="underline underline-offset-2">platowork.com</a>
    </div>
  </div>
  )
}

export default EmailView