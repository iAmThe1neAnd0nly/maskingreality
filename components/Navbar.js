export default function Navbar({items}) {
  return (
    <>
    <div class="row d-flex flex-row p-4" >
        {items.map((i, index) => 
            <div class="col text-center">
                <a href={`#${i}`}>{i}</a>
            </div>
        )}
    </div>
    </>
  )
}
