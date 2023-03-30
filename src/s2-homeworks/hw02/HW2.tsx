import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

// types
export type AffairPriorityType = "low" | "middle" | "high";
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Trading', priority: 'low'},
    {_id: 3, name: 'Games', priority: 'low'},
    {_id: 4, name: 'Workout', priority: 'high'},
    {_id: 5, name: 'HTML & CSS', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    let filteredAffairs = affairs;

    if (filter === "high") {
        filteredAffairs = affairs.filter(a => a.priority === filter)
    }
    if (filter === "middle") {
        filteredAffairs = affairs.filter(a => a.priority === filter)
    }
    if (filter === "low") {
        filteredAffairs = affairs.filter(a => a.priority === filter)
    }
    if (filter === "all") {
        filteredAffairs = affairs.filter(a => a)
    }
    return filteredAffairs
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(a => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
