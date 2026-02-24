export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10">
      <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
        <p>
          {"© "}
          {new Date().getFullYear()} Abdulrahman Famuyon. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
