'use client'

import { ArrowLeftIcon } from "@/ui/icons"
import { useRouter } from "next/navigation"

function BackButton() {
  const router = useRouter()
  return <button onClick={() => router.back()} className="p-[8px] bg-[#D8E9E4] rounded-full">
      <ArrowLeftIcon />
    </button>
}

export default BackButton